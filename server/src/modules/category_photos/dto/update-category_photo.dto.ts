import { PartialType } from '@nestjs/swagger';
import { CreateCategoryPhotoDto } from './create-category_photo.dto';

export class UpdateCategoryPhotoDto extends PartialType(CreateCategoryPhotoDto) {}
