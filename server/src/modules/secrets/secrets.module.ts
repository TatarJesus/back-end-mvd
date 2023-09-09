import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretsEntity } from './entities/secrets.entity';
import { SecretsController } from './secrets.controller';
import { SecretsService } from './secrets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SecretsEntity])],
  controllers: [SecretsController],
  providers: [SecretsService],
})
export class SecretsModule {}
