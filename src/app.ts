import express, { Application, Request, Response } from 'express';
const app: Application = express();
app.use(express.json());

import bookRoutes from '../src/routes/book.route';
import borrowRotes from '../src/routes/borrow.route';

app.use('/api', bookRoutes);
app.use('/api', borrowRotes);

app.get('/', (req: Request, res: Response) => {
  res.send(
    '💖 Welcome to Ababil Library – Built with love, inspired by my dearest Ababil 💖'
  );
});

export default app;
