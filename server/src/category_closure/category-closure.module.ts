import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryClosureController } from './category-closure.controller';
import { CategoryClosureService } from './category-closure.service';
import { CategoryClosure } from './entities/category-closure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryClosure])],
  controllers: [CategoryClosureController],
  providers: [CategoryClosureService],
})
export class CategoryClosureModule {}
