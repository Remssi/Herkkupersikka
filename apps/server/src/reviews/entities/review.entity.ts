import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  reviewText: string;

  @ManyToOne(() => User)
  reviewedBy: User;

  @ManyToOne(() => Product, (product) => product.reviews)
  product: Product;
}
