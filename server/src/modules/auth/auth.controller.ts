import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBasicUsersDto } from '../basic_users/dto/create-basic-users.dto';
import { AuthService } from './auth.service';
import { LoginBasicUsersDto } from '../basic_users/dto/login-basic-users.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: LoginBasicUsersDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: CreateBasicUsersDto) {
    return this.authService.registration(userDto);
  }
}
