import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { EmailModule } from '../email/email.module';
import { LocalStrategy } from './strategies/local-auth.strategy';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { CacheModule } from '@nestjs/common/cache';
import { GoogleAuthStradegy } from './strategies/google-auth.stradegy';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({}),
    UserModule,
    EmailModule,
    CacheModule.register(),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    AccessTokenStrategy,
    GoogleAuthStradegy,
  ],
})
export class AuthModule {}
