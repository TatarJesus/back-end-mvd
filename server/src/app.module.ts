import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './modules/admins/admins.module';
import { BasicUsersModule } from './modules/basic_users/basic-users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoryCardsModule } from './modules/category_cards/category_cards.module';
import { CategoryClosureModule } from './modules/category_closure/category-closure.module';
import { CategoryPhotosModule } from './modules/category_photos/category_photos.module';
import { ContentModule } from './modules/content/content.module';
import { DesignersModule } from './modules/designers/designers.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { ProducersModule } from './modules/producers/producers.module';
import { ProducersCategoriesModule } from './modules/producers_categories/producers-categories.module';
import { RolesModule } from './modules/roles/roles.module';
import { SecretsModule } from './modules/secrets/secrets.module';
import { StarredProducersModule } from './modules/starred_producers/starred-producers.module';
import { ApiTokenCheckMiddleware } from './common/middleware/api-token-check.middleware';

@Module({
  imports: [
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
        synchronize: true, // автоматическая синхронизация схемы !!!(только на этапе разработки!)!!!
        entities: [__dirname + '/**/*.entity{.js, .ts}'], // пути к сущностям
      }),

      // Внедрение зависимости ConfigService для доступа к переменным окружения
      inject: [ConfigService],
    }),

    // Импорт других модулей приложения
    AdminsModule,
    BasicUsersModule,
    CategoriesModule,
    CategoryCardsModule,
    CategoryClosureModule,
    CategoryPhotosModule,
    ContentModule,
    DesignersModule,
    FavouritesModule,
    ProducersModule,
    ProducersCategoriesModule,
    RolesModule,
    SecretsModule,
    StarredProducersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiTokenCheckMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
