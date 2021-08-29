import { Module } from '@nestjs/common';
import { ProductInOrdersService } from './product-in-orders.service';
import { ProductInOrdersController } from './product-in-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInOrder } from './entities/product-in-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInOrder])],
  controllers: [ProductInOrdersController],
  providers: [ProductInOrdersService],
})
export class ProductInOrdersModule {}
