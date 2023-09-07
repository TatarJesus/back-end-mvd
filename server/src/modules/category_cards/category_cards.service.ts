import { Injectable } from '@nestjs/common';
import { CreateCategoryCardDto } from './dto/create-category_card.dto';
import { UpdateCategoryCardDto } from './dto/update-category_card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryCard } from './entities/category_card.entity';

@Injectable()
export class CategoryCardsService {
  constructor(
    @InjectRepository(CategoryCard)
    private categoryCardRepository: Repository<CategoryCard>,
  ) {}

  // Создание товара
  async create(createCategoryCardDto: CreateCategoryCardDto) {
    const categoryCard = this.categoryCardRepository.create(
      createCategoryCardDto,
    );
    return await this.categoryCardRepository.save(categoryCard);
  }

  // Поиск всех товаров
  async findAll() {
    return await this.categoryCardRepository.find();
  }

  // Поиск определенного товара
  async findOne(id: number) {
    return await this.categoryCardRepository.findOne({ where: { id: id } });
  }

  // Обновление определенного товара
  async update(id: number, updateCategoryCardDto: UpdateCategoryCardDto) {
    return await this.categoryCardRepository.update(id, updateCategoryCardDto);
  }

  // Удаление определенного товара
  async remove(id: number) {
    return await this.categoryCardRepository.delete(id);
  }
}
