import { PartialType } from '@nestjs/mapped-types';
import { CreateProducerCategoryDto } from './create-producer-category.dto';

export class UpdateProducerCategoryDto extends PartialType(
  CreateProducerCategoryDto,
) {}
