import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { Producers } from './entities/producers.entity';
import { CategoryCard } from '../category_cards/entities/category_card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producers, CategoryCard])],
  controllers: [ProducersController],
  providers: [ProducersService],
})
export class ProducersModule {}
