import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryClosureDto } from './dto/create-category-closure.dto';
import { UpdateCategoryClosureDto } from './dto/update-category-closure.dto';
import { CategoryClosure } from './entities/category-closure.entity';

@Injectable()
export class CategoryClosureService {
  constructor(
    @InjectRepository(CategoryClosure)
    private readonly categoryClosureRepository: Repository<CategoryClosure>,
  ) {}

  async create(dto: CreateCategoryClosureDto): Promise<CategoryClosure> {
    const newClosure = this.categoryClosureRepository.create(dto);
    return await this.categoryClosureRepository.save(newClosure);
  }

  async findAll(): Promise<CategoryClosure[]> {
    return await this.categoryClosureRepository.find();
  }

  async findOne(ancestor_id: number, descendant_id: number): Promise<CategoryClosure> {
    const found = await this.categoryClosureRepository.findOne({ ancestor_id, descendant_id });
    if (!found) {
      throw new NotFoundException(`CategoryClosure with ancestor_id ${ancestor_id} and descendant_id ${descendant_id} not found`);
    }
    return found;
  }

  async update(ancestor_id: number, descendant_id: number, updateDto: UpdateCategoryClosureDto): Promise<CategoryClosure> {
    const closure = await this.findOne(ancestor_id, descendant_id);
    const updatedClosure = Object.assign(closure, updateDto);
    return await this.categoryClosureRepository.save(updatedClosure);
  }

  async remove(ancestor_id: number, descendant_id: number): Promise<void> {
    const closure = await this.findOne(ancestor_id, descendant_id);
    await this.categoryClosureRepository.remove(closure);
  }
}
