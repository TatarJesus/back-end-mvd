import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicUsersModule } from './basic_users/basic-users.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoryClosureModule } from './category_closure/category-closure.module';
import { ContentModule } from './content/content.module';
import { DesignersModule } from './designers/designers.module';
import { ProducersModule } from './producers/producers.module';
import { ProducersCategoriesModule } from './producers_categories/producers-categories.module';
import { RolesModule } from './roles/roles.module';
import { SecretsModule } from './secrets/secrets.module';
import { StarredProducersModule } from './starred_producers/starred-producers.module';

@Module({
  imports: [
    // Импорт других модулей приложения
    AdminsModule,
    AdminsModule,
    BasicUsersModule,
    CategoriesModule,
    CategoryClosureModule,
    ContentModule,
    DesignersModule,
    ProducersModule,
    ProducersCategoriesModule,
    RolesModule,
    SecretsModule,
    StarredProducersModule,

    // Инициализация глобального модуля конфигурации
    ConfigModule.forRoot({ isGlobal: true }),

    // Асинхронная инициализация TypeORM с использованием конфигурационного сервиса
    TypeOrmModule.forRootAsync({
      // Явный импорт ConfigModule для доступа к переменным окружения
      imports: [ConfigModule],

      // Асинхронная конфигурация TypeORM
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // тип базы данных
        host: configService.get('DB_HOST'), // хост базы данных
        port: configService.get('DB_PORT'), // порт для подключения
        username: configService.get('DB_USERNAME'), // имя пользователя
        password: configService.get('DB_PASSWORD'), // пароль пользователя
        database: configService.get('DB_NAME'), // имя базы данных
        synchronize: true, // автоматическая синхронизация схемы (только на этапе разработки!)
        entities: [__dirname + '/**/*.entity{.js, .ts}'], // пути к сущностям
      }),

      // Внедрение зависимости ConfigService для доступа к переменным окружения
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
