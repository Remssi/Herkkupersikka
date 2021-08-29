import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Column()
  name: string;

  @Column()
  normalPrice: number;

  @Column()
  currentPrice: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  nutrients: string;

  @Column()
  stock: number;
}
