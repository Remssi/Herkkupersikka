import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  id: string;

  name: string;

  normalPrice: number;

  currentPrice: number;

  description: string;

  image: string;

  nutrients: string;

  stock: number;

  manufacturerId: number;

  saleId: number;

  categoryIds: number[];
}
