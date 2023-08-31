import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';

@Injectable()
export class AdminsService {
  create(createAdminsDto: CreateAdminsDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateAdminsDto: UpdateAdminsDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
