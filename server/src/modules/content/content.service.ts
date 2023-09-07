import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDTO } from './dto/create-content.dto';
import { UpdateContentDTO } from './dto/update-content.dto';
import { Content, ContentType } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  // Создание новости, статьи или промо
  async create(createContentDto: CreateContentDTO) {
    const newContent = this.contentRepository.create(createContentDto);
    return await this.contentRepository.save(newContent);
  }

  // Поиск всех новостей, статей или промо
  async findAll() {
    return await this.contentRepository.find();
  }

  // Поиск всех новостей
  async findAllNews() {
    return await this.contentRepository.find({
      where: { type: ContentType.NEWS },
    });
  }

  // Поиск всех статей
  async findAllArticle() {
    return await this.contentRepository.find({
      where: { type: ContentType.ARTICLE },
    });
  }

  // Поиск всех промо
  async findAllPromo() {
    return await this.contentRepository.find({
      where: { type: ContentType.PROMO },
    });
  }

  // Поиск определенного контента
  async findOne(id: number) {
    return await this.contentRepository.findOne({ where: { id: id } });
  }

  // Обновление определенного контента
  async update(id: number, updateContentDto: UpdateContentDTO) {
    return await this.contentRepository.update(id, updateContentDto);
  }

  // Удаление определенного контента
  async remove(id: number) {
    return await this.contentRepository.delete(id);
  }
}
