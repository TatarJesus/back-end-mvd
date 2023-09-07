import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateCategoryClosureDto } from './dto/create-category-closure.dto';
import { UpdateCategoryClosureDto } from './dto/update-category-closure.dto';
import { CategoryClosure } from './entities/category-closure.entity';
import { Category } from '../categories/entities/categories.entity';

@Injectable()
export class CategoryClosureService {
  constructor(
    @InjectRepository(CategoryClosure)
    private readonly categoryClosureRepository: Repository<CategoryClosure>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  // Создание связи предка и потомка категорий
  async create(dto: CreateCategoryClosureDto) {
    const newClosure = this.categoryClosureRepository.create(dto);
    return await this.categoryClosureRepository.save(newClosure);
  }

  // Поиск всех связей предков и потомков категорий
  async findAll() {
    return await this.categoryClosureRepository.find();
  }

  // Поиск определенной связи предка и потомка категорий
  async findOne(ancestor_id: number, descendant_id: number) {
    const found = await this.categoryClosureRepository.findOne({
      where: {
        ancestor_id: ancestor_id,
        descendant_id: descendant_id,
      },
    });
    if (!found) {
      throw new NotFoundException(
        `CategoryClosure with ancestor_id ${ancestor_id} and descendant_id ${descendant_id} not found`,
      );
    }
    return found;
  }

  // Поиск подкатегории
  async findAllSubcategory(ancestor_id: number) {
    const category = await this.categoryClosureRepository.find({
      where: { ancestor_id: ancestor_id },
    });
    const idsCategory = category.map((sub) => {
      return sub.descendant_id;
    });
    return await this.categoriesRepository.findBy({ id: In(idsCategory) });
  }

  // Обновление определенной связи предка и потомка категорий
  async update(
    ancestor_id: number,
    descendant_id: number,
    updateDto: UpdateCategoryClosureDto,
  ): Promise<CategoryClosure> {
    const closure = await this.findOne(ancestor_id, descendant_id);
    const updatedClosure = Object.assign(closure, updateDto);
    return await this.categoryClosureRepository.save(updatedClosure);
  }

  // Удаление определенной связи предка и потомка категорий
  async remove(ancestor_id: number, descendant_id: number) {
    const closure = await this.findOne(ancestor_id, descendant_id);
    await this.categoryClosureRepository.remove(closure);
  }
}
