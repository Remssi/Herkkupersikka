import { Test, TestingModule } from '@nestjs/testing';
import { ProductInOrdersService } from './product-in-orders.service';

describe('ProductInOrdersService', () => {
  let service: ProductInOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductInOrdersService],
    }).compile();

    service = module.get<ProductInOrdersService>(ProductInOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
