import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entities/roles.entity';
import { CreateRolesDto } from './dto/create-roles.dto';
import { UpdateRolesDto } from './dto/update-roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
  ) {}

  // Создание роли
  async create(createRoleDto: CreateRolesDto) {
    const role = this.rolesRepository.create(createRoleDto);
    return await this.rolesRepository.save(role);
  }

  // Поиск всех ролей
  async findAll() {
    return await this.rolesRepository.find();
  }

  // Поиск определенной роли
  async findOne(id: number) {
    return await this.rolesRepository.findOne({ where: { id: id } });
  }

  // Обновление определенной роли
  async update(id: number, updateRoleDto: UpdateRolesDto) {
    return await this.rolesRepository.update(id, updateRoleDto);
  }

  // Удаление определенной роли
  async remove(id: number) {
    return await this.rolesRepository.delete(id);
  }
}
