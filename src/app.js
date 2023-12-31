import path from 'path';
import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    mongoose.connect('env.DATA_STRING', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
