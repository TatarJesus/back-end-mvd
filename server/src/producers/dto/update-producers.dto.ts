import { PartialType } from '@nestjs/mapped-types';
import { CreateProducersDto } from './create-producers.dto';

export class UpdateProducersDto extends PartialType(CreateProducersDto) {}
