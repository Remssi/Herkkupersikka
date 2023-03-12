export class CreateProductDto {
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
