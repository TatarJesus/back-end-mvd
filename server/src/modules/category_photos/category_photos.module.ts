import { Module } from '@nestjs/common';
import { CategoryPhotosService } from './category_photos.service';
import { CategoryPhotosController } from './category_photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryPhoto } from './entities/category_photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryPhoto])],
  controllers: [CategoryPhotosController],
  providers: [CategoryPhotosService],
})
export class CategoryPhotosModule {}
