import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SalesModule } from './sales/sales.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductInOrdersModule } from './product-in-orders/product-in-orders.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { CartsModule } from './carts/carts.module';
import { ProductInCartsModule } from './product-in-carts/product-in-carts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReviewsModule,
    ProductsModule,
    CategoriesModule,
    SalesModule,
    ManufacturersModule,
    OrdersModule,
    ProductInOrdersModule,
    UsersModule,
    NotificationsModule,
    CartsModule,
    ProductInCartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
