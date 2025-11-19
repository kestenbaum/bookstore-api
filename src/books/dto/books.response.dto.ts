import { IsNumber, IsString, Length } from 'class-validator';

export class BookDto {
  @IsString({ message: 'ID must be a string' })
  @Length(1, 36, { message: 'ID must be between 1 and 36 characters' })
  id: string;

  @IsString({ message: 'Title must be a string' })
  @Length(1, 255, { message: 'Title must be between 1 and 255 characters' })
  title: string;

  @IsString({ message: 'Author must be a string' })
  @Length(1, 255, { message: 'Author must be between 1 and 255 characters' })
  author: string;

  @IsString({ message: 'ISBN must be a string' })
  @Length(10, 13, { message: 'ISBN must be between 10 and 13 characters' })
  isbn: string;

  @IsNumber({}, { message: 'Published Year must be a number' })
  @Length(4, 4, { message: 'Published Year must be 4 characters' })
  publishedYear: number;
}
