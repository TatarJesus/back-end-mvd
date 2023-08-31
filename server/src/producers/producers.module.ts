import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { Producers } from './entities/producers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producers])],
  controllers: [ProducersController],
  providers: [ProducersService],
})
export class ProducersModule {}
