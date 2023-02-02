import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('SEQUELIZE_DIALECT'),
        host: configService.get('SEQUELIZE_HOST'),
        port: configService.get('SEQUELIZE_PORT'),
        username: configService.get('SEQUELIZE_USERNAME'),
        password: configService.get('SEQUELIZE_PASSWORD'),
        database: configService.get('SEQUELIZE_DATABASE'),
        synchronize: configService.get<boolean>('SEQUELIZE_SYNCHRONIZE'),
        sync: {
          force: configService.get<boolean>('SEQUELIZE_SYNC_FORCE'),
        },
        autoLoadModels: configService.get<boolean>(
          'SEQUELIZE_AUTO_LOAD_MODELS',
        ),
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
