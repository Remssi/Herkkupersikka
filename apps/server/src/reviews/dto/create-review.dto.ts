import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CreateReviewDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  rating: number;

  @Column()
  reviewText: string;
}
