
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasicUsersService } from './basic-users.service';
import { CreateBasicUsersDto } from './dto/create-basic-users.dto';
import { UpdateBasicUsersDto } from './dto/update-basic-users.dto';

@Controller('basic-users')
export class BasicUsersController {
  constructor(private readonly usersService: BasicUsersService) {}

  @Post()
  create(@Body() createUserDto: CreateBasicUsersDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateBasicUsersDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}