import { PartialType } from '@nestjs/mapped-types';
import { CreateStarredProducersDto } from './create-starred-producers.dto';

export class UpdateStarredProducersDto extends PartialType(
  CreateStarredProducersDto,
) {}
