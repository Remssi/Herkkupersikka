import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import { Manufacturer } from './entities/manufacturer.entity';

@Injectable()
export class ManufacturersService {
  constructor(
    @InjectRepository(Manufacturer)
    private manufacturersRepository: Repository<Manufacturer>,
    @InjectConnection()
    private connection: Connection,
  ) {}

  async create(createManufacturerDto: CreateManufacturerDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const { name } = createManufacturerDto;

      const manufacturer = new Manufacturer();
      await queryRunner.manager.save(Object.assign(manufacturer, { name }));

      await queryRunner.commitTransaction();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.manufacturersRepository.find();
  }

  findOne(id: number) {
    return this.manufacturersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateManufacturerDto: UpdateManufacturerDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const { name } = updateManufacturerDto;

      const manufacturer = new Manufacturer();
      await queryRunner.manager.update(
        Manufacturer,
        id,
        Object.assign(manufacturer, { name }),
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
    return await this.manufacturersRepository.delete(id);
  }
}
