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

  async create(createStarredProducersDto: CreateStarredProducersDto) {
    const starredProducer = this.starredProducersRepository.create(
      createStarredProducersDto,
    );
    return await this.starredProducersRepository.save(starredProducer);
  }

  async findAll() {
    return await this.starredProducersRepository.find();
  }

  async findOne(id: number) {
    return await this.starredProducersRepository.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateStarredProducersDto: UpdateStarredProducersDto,
  ) {
    return await this.starredProducersRepository.update(
      id,
      updateStarredProducersDto,
    );
  }

  async remove(id: number) {
    return await this.starredProducersRepository.delete(id);
  }
}
