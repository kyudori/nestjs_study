import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comments } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':productId')
  async create(
    @Param('productId') productId: string,
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<Comments> {
    return await this.commentsService.createComment(
      productId,
      createCommentDto,
    );
  }
}
