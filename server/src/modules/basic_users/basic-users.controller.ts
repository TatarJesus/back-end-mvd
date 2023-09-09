import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasicUsersService } from './basic-users.service';
import { CreateBasicUsersDto } from './dto/create-basic-users.dto';
import { UpdateBasicUsersDto } from './dto/update-basic-users.dto';
import { LoginBasicUsersDto } from './dto/login-basic-users.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BasicUsersEntity } from './entities/basic-users.entity';

@Controller('basic-users')
export class BasicUsersController {
  constructor(private readonly usersService: BasicUsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: BasicUsersEntity })
  @Post('/register')
  create(@Body() createUserDto: CreateBasicUsersDto) {
    return this.usersService.register(createUserDto);
  }

  @Post('/login')
  login(@Body() loginBasicUserDto: LoginBasicUsersDto) {
    return this.usersService.login(loginBasicUserDto);
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
