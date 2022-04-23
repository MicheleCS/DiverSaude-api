import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import env from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['*'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    },
  });

  const config = new DocumentBuilder().addBearerAuth()
    .setTitle('DiverSaúde')
    .setDescription('')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  app.setGlobalPrefix('api/v1');
  app.enableCors({credentials: true, origin: "*"});
  await app.listen(env().application.port);
}
bootstrap();
