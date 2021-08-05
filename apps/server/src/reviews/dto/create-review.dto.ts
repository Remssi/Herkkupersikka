import { Column } from 'typeorm';

export class CreateReviewDto {
  @Column()
  username: string;

  @Column()
  rating: number;

  @Column()
  reviewText: string;
}
