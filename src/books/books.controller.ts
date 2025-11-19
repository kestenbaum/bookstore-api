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
import { BookDto } from './dto/books.response.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  findAllBooks(): BookDto[] {
    return this.bookService.findAll();
  }

  @Get(':id')
  findBookById(@Param('id') id: string): Book | undefined {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() book: Book): Book {
    return this.bookService.create(book);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatedBook: Partial<Book>,
  ): Book | undefined {
    return this.bookService.update(id, updatedBook);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
