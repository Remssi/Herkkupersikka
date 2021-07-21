import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Connection, Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
    private connection: Connection,
  ) {}

  async create(newReview: Review) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let message;
    try {
      await queryRunner.manager.save(newReview);

      await queryRunner.commitTransaction();
      message = 'success!';
    } catch (error) {
      await queryRunner.rollbackTransaction();
      message = 'error! ' + error;
    } finally {
      await queryRunner.release();
      return message;
    }
  }

  findAll() {
    return this.reviewsRepository.find();
  }

  findOne(id: number) {
    return this.reviewsRepository.findOne(id);
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return this.reviewsRepository.delete(id);
  }
}
