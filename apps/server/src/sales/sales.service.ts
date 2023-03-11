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

  // TODO
  create(createSaleDto: CreateSaleDto) {
    return 'This action adds a new sale';
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

  // TODO
  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  // TODO
  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
