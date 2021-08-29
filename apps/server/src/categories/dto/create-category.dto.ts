import { Column } from 'typeorm';

export class CreateCategoryDto {
  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  description: string;
}
