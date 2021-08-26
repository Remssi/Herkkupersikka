import { Test, TestingModule } from '@nestjs/testing';
import { ProductInOrdersController } from './product-in-orders.controller';
import { ProductInOrdersService } from './product-in-orders.service';

describe('ProductInOrdersController', () => {
  let controller: ProductInOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInOrdersController],
      providers: [ProductInOrdersService],
    }).compile();

    controller = module.get<ProductInOrdersController>(ProductInOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
