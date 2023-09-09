import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretsEntity } from '../secrets/entities/secrets.entity';
import { BasicUsersEntity } from '../basic_users/entities/basic-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SecretsEntity, BasicUsersEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
