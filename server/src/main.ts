import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { convertBoolStrToBoolean } from './common/helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const HOST = configService.get('NEST_HOST');
  const PORT = configService.get('NEST_PORT');
  const GLOBAL_PREFIX = configService.get('GLOBAL_PREFIX');
  const SWAGGER_DOCS_PATH = configService.get('SWAGGER_DOCS_PATH');

  const ENABLE_SWAGGER = configService.get('ENABLE_SWAGGER');
  if (convertBoolStrToBoolean(ENABLE_SWAGGER)) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(configService.get('npm_package_name'))
      .setVersion(configService.get('npm_package_version'))
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(GLOBAL_PREFIX + SWAGGER_DOCS_PATH, app, document);
  }

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(PORT, HOST, () => {
    console.log(`Server listens on http://${HOST}:${PORT}`);
  });
}
bootstrap();
