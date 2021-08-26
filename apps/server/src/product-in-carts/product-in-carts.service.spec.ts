import { Test, TestingModule } from '@nestjs/testing';
import { ProductInCartsService } from './product-in-carts.service';

describe('ProductInCartsService', () => {
  let service: ProductInCartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductInCartsService],
    }).compile();

    service = module.get<ProductInCartsService>(ProductInCartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
