import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { Column } from 'typeorm';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  description: string;
}
