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

  create(createUserDto: CreateBasicUsersDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateBasicUsersDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
