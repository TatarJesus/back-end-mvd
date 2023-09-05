import { Module } from '@nestjs/common';
import { CategoryCardsService } from './category_cards.service';
import { CategoryCardsController } from './category_cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryCard } from './entities/category_card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryCard])],
  controllers: [CategoryCardsController],
  providers: [CategoryCardsService],
})
export class CategoryCardsModule {}
