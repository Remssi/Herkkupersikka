import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductInCartsService } from './product-in-carts.service';
import { CreateProductInCartDto } from './dto/create-product-in-cart.dto';
import { UpdateProductInCartDto } from './dto/update-product-in-cart.dto';

@Controller('product-in-carts')
export class ProductInCartsController {
  constructor(private readonly productInCartsService: ProductInCartsService) {}

  @Post()
  create(@Body() createProductInCartDto: CreateProductInCartDto) {
    return this.productInCartsService.create(createProductInCartDto);
  }

  @Get()
  findAll() {
    return this.productInCartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInCartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductInCartDto: UpdateProductInCartDto) {
    return this.productInCartsService.update(+id, updateProductInCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInCartsService.remove(+id);
  }
}
