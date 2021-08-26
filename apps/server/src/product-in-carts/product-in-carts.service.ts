import { Injectable } from '@nestjs/common';
import { CreateProductInCartDto } from './dto/create-product-in-cart.dto';
import { UpdateProductInCartDto } from './dto/update-product-in-cart.dto';

@Injectable()
export class ProductInCartsService {
  create(createProductInCartDto: CreateProductInCartDto) {
    return 'This action adds a new productInCart';
  }

  findAll() {
    return `This action returns all productInCarts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInCart`;
  }

  update(id: number, updateProductInCartDto: UpdateProductInCartDto) {
    return `This action updates a #${id} productInCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInCart`;
  }
}
