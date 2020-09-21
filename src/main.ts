import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigurationService } from './configuration/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');

  const configuration = app.get(ConfigurationService);
  console.warn('NODE_ENV: ', configuration.get('ENVIRONMENT'));

  const options = new DocumentBuilder()
    .setTitle('COMINDS API Documentation')
    .setVersion('1.0.0')
    .setBasePath('/api')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
