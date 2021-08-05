import { Column } from 'typeorm';

export class CreateProductDto {
  @Column()
  name: string;

  @Column()
  normalPrice: number;

  @Column()
  currentPrice: number;

  @Column()
  description: string;

  // TODO: change to proper type, support multiple imgs
  @Column()
  image: string;

  @Column()
  nutrients: string[];

  @Column()
  stock: number;
}
