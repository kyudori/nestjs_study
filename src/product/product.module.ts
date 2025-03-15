import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // ✅ Product 엔터티 등록
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService], // ✅ 다른 모듈에서 사용 가능하게 설정
})
export class ProductModule {}
