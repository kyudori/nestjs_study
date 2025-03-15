import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly productRepository: Repository<Product>;
  // 제품 모든 정보를 가져오는 로직
  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.save(createProductDto);
  }

  async getDetailProduct(id: string): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async updateProduct(
    id: string,
    updateProductDto: CreateProductDto,
  ): Promise<Product> {
    await this.productRepository.update(id, updateProductDto);
    const product = await this.productRepository.findOneBy({ id });
    if (product) {
      return product;
    }
    throw new NotFoundException(`Product with id ${id} not found`);
  }

  async deleteProduct(id: string): Promise<void> {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    await this.productRepository.delete(id);
  }
}
