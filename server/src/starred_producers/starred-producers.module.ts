import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarredProducersService } from './starred-producers.service';
import { StarredProducersController } from './starred-producers.controller';
import { StarredProducers } from './entities/starred-producers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StarredProducers])],
  controllers: [StarredProducersController],
  providers: [StarredProducersService],
})
export class StarredProducersModule {}
