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

  // Создание нового производителя
  create(createProducersDto: CreateProducersDto) {
    const producer = this.producersRepository.create(createProducersDto);
    return this.producersRepository.save(producer);
  }

  // Поиск всех производителей
  findAll() {
    return this.producersRepository.find();
  }

  // Поиск одного производителя по ID
  findOne(id: number) {
    return this.producersRepository.findOne({ where: { id: id } });
  }

  // Обновление производителя
  update(id: number, updateProducersDto: UpdateProducersDto) {
    return this.producersRepository.update(id, updateProducersDto);
  }

  // Удаление производителя
  remove(id: number) {
    return this.producersRepository.delete(id);
  }
}
