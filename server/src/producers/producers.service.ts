import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducersDto } from './dto/create-producers.dto';
import { UpdateProducersDto } from './dto/update-producers.dto';
import { Producers } from './entities/producers.entity';

@Injectable()
export class ProducersService {
  constructor(
    @InjectRepository(Producers)
    private producersRepository: Repository<Producers>,
  ) {}

  // Создание нового продюсера
  create(createProducersDto: CreateProducersDto) {
    const producer = this.producersRepository.create(createProducersDto);
    return this.producersRepository.save(producer);
  }

  // Поиск всех продюсеров
  findAll() {
    return this.producersRepository.find();
  }

  // Поиск одного продюсера по ID
  findOne(id: number) {
    return this.producersRepository.findOne(id);
  }

  // Обновление продюсера
  update(id: number, updateProducersDto: UpdateProducersDto) {
    return this.producersRepository.update(id, updateProducersDto);
  }

  // Удаление продюсера
  remove(id: number) {
    return this.producersRepository.delete(id);
  }
}
