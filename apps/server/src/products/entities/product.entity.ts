import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

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
