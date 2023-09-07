import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  // Создание категории
  async create(createCategoryDto: CreateCategoryDTO) {
    const newCategory = this.categoriesRepository.create(createCategoryDto);
    return await this.categoriesRepository.save(newCategory);
  }

  // Поиск всех категорий
  async findAll() {
    return await this.categoriesRepository.find();
  }

  // Поиск определенной категории
  async findOne(id: number) {
    return await this.categoriesRepository.findOne({ where: { id: id } });
  }

  // Обновление определенной категории
  async update(id: number, updateCategoryDto: UpdateCategoryDTO) {
    return await this.categoriesRepository.update(id, updateCategoryDto);
  }

  // Удаление определенной категории
  async remove(id: number) {
    return await this.categoriesRepository.delete(id);
  }
}
