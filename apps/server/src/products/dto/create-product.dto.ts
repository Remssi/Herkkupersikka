export class CreateProductDto {
  name: string;

  normalPrice: number;

  currentPrice: number;

  description: string;

  // TODO: change to proper type, support multiple imgs
  image: string;

  nutrients: string;

  stock: number;
}
