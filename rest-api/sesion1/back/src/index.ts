import './load-env.js';
import cors from 'cors';
import http from 'http';
import { Server, Socket } from 'socket.io';
import express from 'express';
import path from 'path';
import url from 'url';
import { createApp } from './express.server.js';
import { envConstants } from './env.constants.js';
import { api } from './api.js';
import { addUserSession, ConnectionConfig, getUserInfo } from './store.js';

const app = createApp();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  origin: '*',
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};
app.use(cors(options));

const socketapp = new http.Server(app);

const io = new Server(socketapp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
app.use('/', express.static(staticFilesPath));

app.use('/api', api);

app.listen(envConstants.PORT, () => {
  console.log(`Server ready at http://localhost:${envConstants.PORT}/api`);
});

socketapp.listen(3000, () => {
  console.log(`Socket.IO server running at http://localhost:3000/`);
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
  const config: ConnectionConfig = {
    nickname: socket.handshake.query.nickname as string,
    room: socket.handshake.query.room as string,
  };
  const isUserAdded = addUserSession(socket.id, config);
  if (isUserAdded) {
    socket.join(config.room);
    socket.emit('message', { type: 'CONNECTION_SUCCEDED' });
    const userInfo = getUserInfo(socket.id);
    socket.on('message', (data) => {
      console.log(data);
      if (data.payload?.all) {
        socket.broadcast.emit('message', {
          ...data,
          payload: {
            ...data.payload,
            nickname: userInfo.nickname,
          },
        });
      } else {
        socket.to(userInfo.room).emit('message', {
          ...data,
          payload: {
            ...data.payload,
            nickname: userInfo.nickname,
          },
        });
      }
    });
  } else {
    socket.emit('message', { type: 'NICKNAME_USED' });
  }
});
