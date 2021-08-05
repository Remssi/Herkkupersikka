import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    private connection: Connection,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(createProductDto);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(updateProductDto);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }
}
