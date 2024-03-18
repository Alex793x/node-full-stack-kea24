import express, { json, urlencoded } from 'express';

// Import routers
import usersRouter from './routers/usersRouter';
import productsRouter from './routers/productsRouter';

function setupServer() {
  const server = express();

  // Middlewares
  app.use(json()); // for parsing application/json
  app.use(express.static("public"))

  // Use routers
  app.use('/users', usersRouter);
  app.use('/products', productsRouter);

  // Default route for handling not found
  app.use((req, res) => {
    res.status(404).send('Oops! Not found');
  });

  return server;
}

export default setupServer;
