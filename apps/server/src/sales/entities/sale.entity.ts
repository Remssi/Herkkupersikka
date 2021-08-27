import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  multiplier: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @OneToMany(() => Product, (product) => product.sale)
  products: Product[];
}
