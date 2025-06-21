import mongoose, { Schema } from 'mongoose';
import { IBook, IbookInstance } from '../interfaces/book.interface';

const bookSchema = new Schema<IbookInstance>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        'FICTION',
        'NON_FICTION',
        'SCIENCE',
        'HISTORY',
        'BIOGRAPHY',
        'FANTASY',
      ],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: {
      type: Number,
      required: true,
      min: [0, 'Copies must be a positive number'],
      validate: {
        validator: Number.isInteger,
        message: 'Copies must be a positive number',
      },
    },
    available: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

bookSchema.methods.checkAvailability = async function (this: IbookInstance) {
  if (this.copies === 0) {
    this.available = false;
    await this.save();
  }
};

bookSchema.pre('save', function (next) {
  console.log('saving post.......');
  next();
});

bookSchema.post('save', function (doc) {
  console.log('noting');
});

export const Book = mongoose.model<IbookInstance>('Book', bookSchema);
