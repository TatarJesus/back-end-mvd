import { Injectable } from '@nestjs/common';
import { CreateCategoryPhotoDto } from './dto/create-category_photo.dto';
import { UpdateCategoryPhotoDto } from './dto/update-category_photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryCard } from '../category_cards/entities/category_card.entity';
import { Repository } from 'typeorm';
import { CategoryPhoto } from './entities/category_photo.entity';

@Injectable()
export class CategoryPhotosService {
  constructor(
    @InjectRepository(CategoryPhoto)
    private categoryPhotoRepository: Repository<CategoryPhoto>,
  ) {}
  create(createCategoryPhotoDto: CreateCategoryPhotoDto) {
    const categoryPhoto = this.categoryPhotoRepository.create(
      createCategoryPhotoDto,
    );
    return this.categoryPhotoRepository.save(categoryPhoto);
  }

  findAll() {
    return this.categoryPhotoRepository.find();
  }

  findOne(id: number) {
    return this.categoryPhotoRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateCategoryPhotoDto: UpdateCategoryPhotoDto) {
    return this.categoryPhotoRepository.update(id, updateCategoryPhotoDto);
  }

  remove(id: number) {
    return this.categoryPhotoRepository.delete(id);
  }
}
