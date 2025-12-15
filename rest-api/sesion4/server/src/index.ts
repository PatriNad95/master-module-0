import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { hotelApi, cityApi } from './api/index.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

const PORT = 3000;
const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use('/', express.static(path.resolve(import.meta.dirname, '../public')));

app.use('/graphql', createHandler({ schema, rootValue: resolvers }));
app.use('/playground', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');
  res.sendFile(path.join(import.meta.dirname, './graphql/playground.html'));
});

app.use('/api/hotels', hotelApi);
app.use('/api/cities', cityApi);

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
  console.log(
    `GraphQl Playground running at http://localhost:${PORT}/playground`
  );
  console.log(`GraphQL Server ready at por http://localhost:${PORT}/graphql`);
});
