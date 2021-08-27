import { Column } from 'typeorm';

export class CreateReviewDto {
  @Column()
  rating: number;

  @Column()
  reviewText: string;
}
