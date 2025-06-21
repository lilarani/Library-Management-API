import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from '../src/routes/book.route';
import borrowRotes from '../src/routes/borrow.route';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api', borrowRotes);

app.get('/', (req, res) => {
  res.send('library management server is running');
});

async function main() {
  await mongoose.connect(`${process.env.DB_URI}`);

  app.listen(port, () => {
    console.log(`library management server port is:  ${port}`);
  });
}

main();
