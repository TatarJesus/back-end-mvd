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
  create(createCategoryCardDto: CreateCategoryCardDto) {
    const categoryCard = this.categoryCardRepository.create(
      createCategoryCardDto,
    );
    return this.categoryCardRepository.save(categoryCard);
  }

  findAll() {
    return this.categoryCardRepository.find();
  }

  findOne(id: number) {
    return this.categoryCardRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateCategoryCardDto: UpdateCategoryCardDto) {
    return this.categoryCardRepository.update(id, updateCategoryCardDto);
  }

  remove(id: number) {
    return this.categoryCardRepository.delete(id);
  }
}
