import { Injectable } from '@nestjs/common';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favourite } from './entities/favourite.entity';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(Favourite)
    private usersRepository: Repository<Favourite>,
  ) {}
  create(createFavouriteDto: CreateFavouriteDto) {
    const user = this.usersRepository.create(createFavouriteDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
