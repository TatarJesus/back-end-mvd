import { Injectable } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favourite } from './entities/favourite.entity';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(Favourite)
    private favouriteRepository: Repository<Favourite>,
  ) {}

  // Добавление избранного производителя
  async create(createFavouriteDto: CreateFavouriteDto) {
    const user = this.favouriteRepository.create(createFavouriteDto);
    return await this.favouriteRepository.save(user);
  }

  // Поиск всех избранных производителя
  async findAll(id: number) {
    return await this.favouriteRepository.find({ where: { user_id: id } });
  }

  // Поиск определенного избранного производителя
  async findOne(user_id: number, producer_id: number): Promise<Favourite> {
    return await this.favouriteRepository.findOne({
      where: {
        user_id: user_id,
        producer_id: producer_id,
      },
    });
  }

  // Удаление определенного избранного производителя
  async remove(user_id: number, producer_id: number): Promise<void> {
    const favourite = await this.findOne(user_id, producer_id);
    await this.favouriteRepository.delete(favourite);
  }
}
