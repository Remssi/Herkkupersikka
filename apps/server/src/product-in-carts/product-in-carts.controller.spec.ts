import { Test, TestingModule } from '@nestjs/testing';
import { ProductInCartsController } from './product-in-carts.controller';
import { ProductInCartsService } from './product-in-carts.service';

describe('ProductInCartsController', () => {
  let controller: ProductInCartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInCartsController],
      providers: [ProductInCartsService],
    }).compile();

    controller = module.get<ProductInCartsController>(ProductInCartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
