import { PartialType } from '@nestjs/swagger';
import { CreateCategoryCardDto } from './create-category_card.dto';

export class UpdateCategoryCardDto extends PartialType(CreateCategoryCardDto) {}
