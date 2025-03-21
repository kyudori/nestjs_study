import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [],
    credentials: false,
  });

  const config = new DocumentBuilder()
    .setTitle('Elicelab_OPENAPI')
    .setDescription('Elicelab_OPENAPI API description')
    .setVersion('1.0')
    .addTag('elicelab')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 7070);
}
bootstrap();
