import { Injectable } from '@nestjs/common';
import { CreateBasicUsersDto } from './dto/create-basic-users.dto';
import { UpdateBasicUsersDto } from './dto/update-basic-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BasicUsersEntity } from './entities/basic-users.entity';
import { Repository } from 'typeorm';
import { SecretsEntity } from '../secrets/entities/secrets.entity';
import * as bcrypt from 'bcrypt';
import { LoginBasicUsersDto } from './dto/login-basic-users.dto';

@Injectable()
export class BasicUsersService {
  constructor(
    @InjectRepository(BasicUsersEntity)
    private usersRepository: Repository<BasicUsersEntity>,

    @InjectRepository(SecretsEntity)
    private secretsRepository: Repository<SecretsEntity>,
  ) {}

  // Создание пользователя
  async register(createUserDto: CreateBasicUsersDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    const secret = this.secretsRepository.create({
      password_hash: hash,
      old_password: hash,
      password_salt: salt,
    });
    console.info('secret', secret);
    await this.secretsRepository.save(secret);
    return await this.createUser({
      ...createUserDto,
      secret_id: secret.id,
    });
  }

  async createUser(createUserDto: CreateBasicUsersDto) {
    console.info('createUserDto', createUserDto);
    const user = this.usersRepository.create(createUserDto);
    return user;
  }

  async login(loginBasicUserDto: LoginBasicUsersDto) {
    const user = await this.getUserByEmail(loginBasicUserDto.email);
    const pass = await this.secretsRepository.findOne({
      where: { id: user.secret_id },
    });
    const passwordEquals = await bcrypt.compare(
      loginBasicUserDto.password,
      pass.password_hash,
    );
    return passwordEquals;
  }

  // Поиск всех пользователей
  async findAll() {
    return await this.usersRepository.find();
  }

  async getUserByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email: email } });
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
