import { ApolloServer } from '@apollo/server';
import express from 'express';
import cors from 'cors';
// import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from '@apollo/server/express4';
import { neoSchema } from './config/config.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;
const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
});
//make sure the unique contraints are setup
neoSchema.assertIndexesAndConstraints({ options: { create: true } });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dir, '../../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(dir, '../../client/dist/index.html'));
  });
} else {
  const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:80'],
  };
  app.use(cors(corsOption));
}
await server.start();
app.use('/graphql', expressMiddleware(server));
//TODO: Add in jwt stuffs
//app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}}
    Graph: http://localhost:${PORT}/graphql`);
});
