import { Module } from '@nestjs/common';
import { DesignersService } from './designers.service';
import { DesignersController } from './designers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Designers } from './entities/designers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Designers])],
  controllers: [DesignersController],
  providers: [DesignersService],
})
export class DesignersModule {}
