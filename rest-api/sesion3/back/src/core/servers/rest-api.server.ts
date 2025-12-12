import express from 'express';
import cors from 'cors';

export const createRestApiServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors({ credentials: true, origin: 'http://localhost:8080' })); // para que confie en ese dominio cuando usamos cookies, sino valdria el *

  return app;
};
