import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDTO } from './dto/create-content.dto';
import { UpdateContentDTO } from './dto/update-content.dto';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  create(createContentDto: CreateContentDTO) {
    const newContent = this.contentRepository.create(createContentDto);
    return this.contentRepository.save(newContent);
  }

  findAll() {
    return this.contentRepository.find();
  }

  findOne(id: number) {
    return this.contentRepository.findOne(id);
  }

  update(id: number, updateContentDto: UpdateContentDTO) {
    return this.contentRepository.update(id, updateContentDto);
  }

  remove(id: number) {
    return this.contentRepository.delete(id);
  }
}
