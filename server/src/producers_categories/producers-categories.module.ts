import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersCategoriesService } from './producers-categories.service';
import { ProducersCategoriesController } from './producers-categories.controller';
import { ProducerCategory } from './entities/producer-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProducerCategory])],
  controllers: [ProducersCategoriesController],
  providers: [ProducersCategoriesService],
})
export class ProducersCategoriesModule {}
