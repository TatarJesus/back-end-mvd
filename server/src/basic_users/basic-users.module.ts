import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicUsers } from './entities/basic-users.entity';
import { BasicUsersController } from './basic-users.controller';
import { BasicUsersService } from './basic-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([BasicUsers])],
  controllers: [BasicUsersController],
  providers: [BasicUsersService],
})
export class BasicUsersModule {}