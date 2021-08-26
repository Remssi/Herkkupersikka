import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductInOrdersService } from './product-in-orders.service';
import { CreateProductInOrderDto } from './dto/create-product-in-order.dto';
import { UpdateProductInOrderDto } from './dto/update-product-in-order.dto';

@Controller('product-in-orders')
export class ProductInOrdersController {
  constructor(private readonly productInOrdersService: ProductInOrdersService) {}

  @Post()
  create(@Body() createProductInOrderDto: CreateProductInOrderDto) {
    return this.productInOrdersService.create(createProductInOrderDto);
  }

  @Get()
  findAll() {
    return this.productInOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductInOrderDto: UpdateProductInOrderDto) {
    return this.productInOrdersService.update(+id, updateProductInOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInOrdersService.remove(+id);
  }
}
