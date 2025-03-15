import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //product get all
  @Get('/all')
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  // 제품 등록
  @Post('/new')
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(createProductDto);
  }

  // 제품 상세 정보 불러오기
  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.getDetailProduct(id);
  }

  // 제품 수정
  @Put('/:id')
  async updateOne(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.updateProduct(id, createProductDto);
  }

  // 제품
  @Delete('/:id')
  async deleteOne(@Param('id') id: string): Promise<void> {
    return await this.productService.deleteProduct(id);
  }
}
