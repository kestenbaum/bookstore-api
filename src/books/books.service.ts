import { Injectable } from '@nestjs/common';
import { Book } from './interface/books.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  create(book: Book): Book {
    const newBook: Book = { ...book, id: uuidv4() };
    this.books.push(newBook);
    return newBook;
  }

  update(id: string, updatedBook: Partial<Book>): Book | undefined {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return undefined;
    }
    const existingBook = this.books[bookIndex];
    const mergedBook = { ...existingBook, ...updatedBook };
    this.books[bookIndex] = mergedBook;
    return mergedBook;
  }

  delete(id: string) {
    return this.books.filter((book) => book.id !== id);
  }
}
