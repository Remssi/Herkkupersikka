import { Module } from '@nestjs/common';
import { ProductInCartsService } from './product-in-carts.service';
import { ProductInCartsController } from './product-in-carts.controller';

@Module({
  controllers: [ProductInCartsController],
  providers: [ProductInCartsService]
})
export class ProductInCartsModule {}
