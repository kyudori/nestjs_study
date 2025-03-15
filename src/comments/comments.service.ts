import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { ProductService } from '../product/product.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentRepository: Repository<Comments>,
    private readonly productService: ProductService,
  ) {}

  async createComment(
    productId: string,
    createCommentDto: CreateCommentDto,
  ): Promise<Comments> {
    const product = await this.productService.getDetailProduct(productId);
    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found`);
    }
    // DTO로부터 엔터티 인스턴스를 생성합니다.
    const newComment = this.commentRepository.create({
      content: createCommentDto.content,
      product: product,
    });
    return await this.commentRepository.save(newComment);
  }
}
