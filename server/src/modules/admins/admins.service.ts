import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admins } from './entities/admins.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admins)
    private adminsRepository: Repository<Admins>,
  ) {}

  // Создание пользователя администратора
  async create(createAdminsDto: CreateAdminsDto) {
    const admin = this.adminsRepository.create(createAdminsDto);
    return await this.adminsRepository.save(admin);
  }

  // Поиск всех пользователей администраторов
  async findAll() {
    return await this.adminsRepository.find();
  }

  // Поиск определенного пользователя администратора
  async findOne(id: number) {
    return await this.adminsRepository.find({ where: { id: id } });
  }

  // Обновление данных определенного пользователя администратора
  async update(id: number, updateAdminsDto: UpdateAdminsDto) {
    return await this.adminsRepository.update(id, updateAdminsDto);
  }

  // Удаление определенного пользователя администратора
  async remove(id: number) {
    return await this.adminsRepository.delete(id);
  }
}
