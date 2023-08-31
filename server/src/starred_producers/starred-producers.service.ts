import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStarredProducersDto } from './dto/create-starred-producers.dto';
import { UpdateStarredProducersDto } from './dto/update-starred-producers.dto';
import { StarredProducers } from './entities/starred-producers.entity';

@Injectable()
export class StarredProducersService {
  constructor(
    @InjectRepository(StarredProducers)
    private starredProducersRepository: Repository<StarredProducers>,
  ) {}

  create(createStarredProducersDto: CreateStarredProducersDto) {
    const starredProducer = this.starredProducersRepository.create(createStarredProducersDto);
    return this.starredProducersRepository.save(starredProducer);
  }

  findAll() {
    return this.starredProducersRepository.find();
  }

  findOne(id: number) {
    return this.starredProducersRepository.findOne(id);
  }

  update(id: number, updateStarredProducersDto: UpdateStarredProducersDto) {
    return this.starredProducersRepository.update(id, updateStarredProducersDto);
  }

  remove(id: number) {
    return this.starredProducersRepository.delete(id);
  }
}
