import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Connection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductWithCategoryIds } from './products.controller';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private connection: Connection,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const {
        currentPrice,
        description,
        image,
        name,
        normalPrice,
        nutrients,
        stock,
        manufacturerId,
        saleId,
        categoryIds,
      } = createProductDto;

      // update categories join table
      const allCategories = await queryRunner.manager.find(Category);
      const newProductCategories = allCategories.filter((category) =>
        categoryIds.includes(category.id),
      );

      const product = new Product();
      await queryRunner.manager.save(
        Object.assign(product, {
          currentPrice,
          description,
          image,
          name,
          normalPrice,
          nutrients,
          stock,
          manufacturerId,
          saleId,
          categories: newProductCategories,
        }),
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      console.log(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    const products = await this.productsRepository.find({
      relations: ['categories', 'manufacturer', 'sale'],
    });

    const productsWithCategoryIds: ProductWithCategoryIds[] = [];

    // add categoryIds array for react-admin's ReferenceArrayField component
    // TODO: make custom react admin component, which uses directly returned category data
    products.map((product) => {
      const productWithCategoryIds: ProductWithCategoryIds = {
        ...product,
        categoryIds: product.categories.map((category) => category.id),
      };
      productsWithCategoryIds.push(productWithCategoryIds);
    });

    return productsWithCategoryIds;
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({
      where: {
        id: id,
      },
      relations: ['categories', 'manufacturer', 'sale'],
    });

    const productWithCategoryIds: ProductWithCategoryIds = {
      ...product,
      categoryIds: product.categories.map((category) => category.id),
    };

    return productWithCategoryIds;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const {
        id,
        currentPrice,
        description,
        image,
        name,
        normalPrice,
        nutrients,
        stock,
        manufacturerId,
        saleId,
        categoryIds,
      } = updateProductDto;

      // update categories join table
      const allCategories = await queryRunner.manager.find(Category);
      const newProductCategories = allCategories.filter((category) =>
        categoryIds.includes(category.id),
      );

      console.log('new cates', newProductCategories);

      const updatedProduct = new Product();
      await queryRunner.manager.save(
        Product,
        Object.assign(updatedProduct, {
          id,
          currentPrice,
          description,
          image,
          name,
          normalPrice,
          nutrients,
          stock,
          manufacturerId,
          saleId,
          categories: newProductCategories,
        }),
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    return await this.productsRepository.delete(id);
  }
}
