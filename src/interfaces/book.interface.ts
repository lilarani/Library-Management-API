import { Document } from 'mongoose';

interface IBook {
  title: string;
  author: string;
  genre:
    | 'FICTION'
    | 'NON_FICTION'
    | 'SCIENCE'
    | 'HISTORY'
    | 'BIOGRAPHY'
    | 'FANTASY';
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

interface IbookInstance extends IBook, Document {
  checkAvailability(): Promise<void>;
}

export { IBook, IbookInstance };
