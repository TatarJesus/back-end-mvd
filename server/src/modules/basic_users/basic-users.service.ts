import { Injectable } from '@nestjs/common';
import { CreateBasicUsersDto } from './dto/create-basic-users.dto';
import { UpdateBasicUsersDto } from './dto/update-basic-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BasicUsers } from './entities/basic-users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BasicUsersService {
  constructor(
    @InjectRepository(BasicUsers)
    private usersRepository: Repository<BasicUsers>,
  ) {}

  // Создание пользователя
  async create(createUserDto: CreateBasicUsersDto) {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  // Поиск всех пользователей
  async findAll() {
    return await this.usersRepository.find();
  }

  // Поиск определенного пользователя
  async findOne(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  // Обновление данных о пользователе
  async update(id: number, updateUserDto: UpdateBasicUsersDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  // Удаление пользователя
  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
