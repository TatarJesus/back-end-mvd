import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducerCategoryDto } from './dto/create-producer-category.dto';
import { UpdateProducerCategoryDto } from './dto/update-producer-category.dto';
import { ProducerCategory } from './entities/producer-category.entity';

@Injectable()
export class ProducersCategoriesService {
  constructor(
    @InjectRepository(ProducerCategory)
    private readonly producerCategoryRepository: Repository<ProducerCategory>,
  ) {}

  async create(dto: CreateProducerCategoryDto): Promise<ProducerCategory> {
    const newCategory = this.producerCategoryRepository.create(dto);
    return await this.producerCategoryRepository.save(newCategory);
  }

  async findAll(): Promise<ProducerCategory[]> {
    return await this.producerCategoryRepository.find();
  }

  async findOne(id: number): Promise<ProducerCategory> {
    const found = await this.producerCategoryRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`ProducerCategory with id ${id} not found`);
    }
    return found;
  }

  async update(id: number, updateDto: UpdateProducerCategoryDto): Promise<ProducerCategory> {
    const category = await this.findOne(id);
    const updatedCategory = Object.assign(category, updateDto);
    return await this.producerCategoryRepository.save(updatedCategory);
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await this.producerCategoryRepository.remove(category);
  }
}
