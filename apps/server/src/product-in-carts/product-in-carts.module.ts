import { Module } from '@nestjs/common';
import { ProductInCartsService } from './product-in-carts.service';
import { ProductInCartsController } from './product-in-carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInCart } from './entities/product-in-cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInCart])],
  controllers: [ProductInCartsController],
  providers: [ProductInCartsService],
})
export class ProductInCartsModule {}
