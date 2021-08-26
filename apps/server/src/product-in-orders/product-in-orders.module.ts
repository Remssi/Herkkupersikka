import { Module } from '@nestjs/common';
import { ProductInOrdersService } from './product-in-orders.service';
import { ProductInOrdersController } from './product-in-orders.controller';

@Module({
  controllers: [ProductInOrdersController],
  providers: [ProductInOrdersService]
})
export class ProductInOrdersModule {}
