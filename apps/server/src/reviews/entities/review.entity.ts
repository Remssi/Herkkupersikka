import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  rating: number;

  @Column()
  reviewText: string;
}
