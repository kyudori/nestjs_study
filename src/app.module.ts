import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { CommentsModule } from './comments/comments.module';
import * as Joi from '@hapi/joi';
import { TerminusModule } from '@nestjs/terminus';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // ✅ 환경 변수 로드 및 유효성 검사
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),

    // ✅ DatabaseModule에서 TypeORM 설정 관리
    DatabaseModule,

    // ✅ ProductModule 포함
    ProductModule,

    CommentsModule,
    TerminusModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
