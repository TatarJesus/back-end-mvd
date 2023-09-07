import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Secrets } from './entities/secrets.entity';
import { CreateSecretsDto } from './dto/create-secrets.dto';
import { UpdateSecretsDto } from './dto/update-secrets.dto';

@Injectable()
export class SecretsService {
  constructor(
    @InjectRepository(Secrets)
    private secretsRepository: Repository<Secrets>,
  ) {}

  // Добавление пароля
  async create(createSecretDto: CreateSecretsDto) {
    const secret = this.secretsRepository.create(createSecretDto);
    return await this.secretsRepository.save(secret);
  }

  // Поиск всех паролей
  async findAll() {
    return await this.secretsRepository.find();
  }

  // Поиск определенного пароля
  async findOne(id: number) {
    return await this.secretsRepository.findOne({ where: { id: id } });
  }

  // Обновление определенного пароля
  async update(id: number, updateSecretDto: UpdateSecretsDto) {
    return await this.secretsRepository.update(id, updateSecretDto);
  }

  // Удаление определенного пароля
  async remove(id: number) {
    return await this.secretsRepository.delete(id);
  }
}
