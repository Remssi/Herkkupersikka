import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
    private connection: Connection,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const { multiplier, startDate, endDate } = createSaleDto;

      const sale = new Sale();
      await queryRunner.manager.save(
        Object.assign(sale, { multiplier, startDate, endDate }),
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.salesRepository.find();
  }

  findOne(id: number) {
    return this.salesRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateSaleDto: UpdateSaleDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const { multiplier, startDate, endDate } = updateSaleDto;

      const sale = new Sale();
      await queryRunner.manager.update(
        Sale,
        id,
        Object.assign(sale, { multiplier, startDate, endDate }),
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    return await this.salesRepository.delete(id);
  }
}
