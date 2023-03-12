import { Category } from 'src/categories/entities/category.entity';
import { Manufacturer } from 'src/manufacturers/entities/manufacturer.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Sale } from 'src/sales/entities/sale.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  normalPrice: number;

  @Column('float')
  currentPrice: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  nutrients: string;

  @Column('int')
  stock: number;

  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.products)
  manufacturer: Manufacturer;

  @Column()
  manufacturerId: number;

  @ManyToMany(() => Category, {
    // ? cascade is not explicit way of handling join table, use something else?
    cascade: true,
  })
  @JoinTable()
  categories: Category[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @ManyToOne(() => Sale, (sale) => sale.products)
  sale: Sale;

  @Column()
  saleId: number;
}
