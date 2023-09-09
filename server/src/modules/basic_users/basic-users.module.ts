import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicUsersEntity } from './entities/basic-users.entity';
import { BasicUsersController } from './basic-users.controller';
import { BasicUsersService } from './basic-users.service';
import { SecretsEntity } from '../secrets/entities/secrets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BasicUsersEntity, SecretsEntity])],
  controllers: [BasicUsersController],
  providers: [BasicUsersService],
})
export class BasicUsersModule {}
