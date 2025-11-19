import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import type { Book } from './interface/books.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get('books')
  findAllBooks(): Book[] {
    return this.bookService.findAll();
  }

  @Get(':id')
  findBookById(@Param('id') id: string): Book | undefined {
    return this.bookService.findOne(id);
  }

  @Post('/create')
  create(@Body() book: Book): Book {
    return this.bookService.create(book);
  }

  @Put('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updatedBook: Partial<Book>,
  ): Book | undefined {
    return this.bookService.update(id, updatedBook);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
