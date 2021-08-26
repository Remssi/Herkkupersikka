import { Injectable } from '@nestjs/common';
import { CreateProductInOrderDto } from './dto/create-product-in-order.dto';
import { UpdateProductInOrderDto } from './dto/update-product-in-order.dto';

@Injectable()
export class ProductInOrdersService {
  create(createProductInOrderDto: CreateProductInOrderDto) {
    return 'This action adds a new productInOrder';
  }

  findAll() {
    return `This action returns all productInOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInOrder`;
  }

  update(id: number, updateProductInOrderDto: UpdateProductInOrderDto) {
    return `This action updates a #${id} productInOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInOrder`;
  }
}
