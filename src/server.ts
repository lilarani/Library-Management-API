import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app';

const port = 5000;

async function main() {
  try {
    await mongoose.connect(`${process.env.DB_URI}`);

    app.listen(port, () => {
      console.log(`library management server port is:  ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
