import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';

@Injectable()
export class AdminsService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateAdminsDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
