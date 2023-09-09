import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateBasicUsersDto } from '../basic_users/dto/create-basic-users.dto';
import { BasicUsersService } from '../basic_users/basic-users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { BasicUsersEntity } from '../basic_users/entities/basic-users.entity';
import { LoginBasicUsersDto } from '../basic_users/dto/login-basic-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SecretsEntity } from '../secrets/entities/secrets.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(SecretsEntity)
    private secretsRepository: Repository<SecretsEntity>,
    private userService: BasicUsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: LoginBasicUsersDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateBasicUsersDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userDto.password, salt);
    const secret = this.secretsRepository.create({
      password_hash: hashPassword,
      old_password: hashPassword,
      password_salt: salt,
    });
    console.info('secret', secret);
    const user = await this.userService.createUser({
      ...userDto,
      secret_id: secret.id,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: BasicUsersEntity) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: LoginBasicUsersDto) {
    const user = await this.userService.getUserByEmail(userDto.email);

    const passwordEquals = await bcrypt.compare(
      userDto.password,
      userDto.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный емайл или пароль',
    });
  }
}
