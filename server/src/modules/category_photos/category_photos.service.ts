import { Injectable } from '@nestjs/common';
import { CreateCategoryPhotoDto } from './dto/create-category_photo.dto';
import { UpdateCategoryPhotoDto } from './dto/update-category_photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryPhoto } from './entities/category_photo.entity';

@Injectable()
export class CategoryPhotosService {
  constructor(
    @InjectRepository(CategoryPhoto)
    private categoryPhotoRepository: Repository<CategoryPhoto>,
  ) {}

  // Создание поля для фото категории производителя
  async create(createCategoryPhotoDto: CreateCategoryPhotoDto) {
    const categoryPhoto = this.categoryPhotoRepository.create(
      createCategoryPhotoDto,
    );
    return await this.categoryPhotoRepository.save(categoryPhoto);
  }

  // Поиск полей для фото категорий производителей
  async findAll() {
    return await this.categoryPhotoRepository.find();
  }

  // Поиск определенного поля для фото категории производителя
  async findOne(id: number) {
    return await this.categoryPhotoRepository.findOne({ where: { id: id } });
  }

  // Обновление определенного поля для фото категории производителя
  async update(id: number, updateCategoryPhotoDto: UpdateCategoryPhotoDto) {
    return await this.categoryPhotoRepository.update(
      id,
      updateCategoryPhotoDto,
    );
  }

  // Удаление определенного поля для фото категории производителя
  async remove(id: number) {
    return await this.categoryPhotoRepository.delete(id);
  }
}
