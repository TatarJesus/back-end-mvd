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

  create(createSecretDto: CreateSecretsDto) {
    const secret = this.secretsRepository.create(createSecretDto);
    return this.secretsRepository.save(secret);
  }

  findAll() {
    return this.secretsRepository.find();
  }

  findOne(id: number) {
    return this.secretsRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateSecretDto: UpdateSecretsDto) {
    return this.secretsRepository.update(id, updateSecretDto);
  }

  remove(id: number) {
    return this.secretsRepository.delete(id);
  }
}
