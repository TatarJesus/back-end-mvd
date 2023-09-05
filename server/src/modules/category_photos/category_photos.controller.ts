import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryPhotosService } from './category_photos.service';
import { CreateCategoryPhotoDto } from './dto/create-category_photo.dto';
import { UpdateCategoryPhotoDto } from './dto/update-category_photo.dto';

@Controller('category-photos')
export class CategoryPhotosController {
  constructor(private readonly categoryPhotosService: CategoryPhotosService) {}

  @Post()
  create(@Body() createCategoryPhotoDto: CreateCategoryPhotoDto) {
    return this.categoryPhotosService.create(createCategoryPhotoDto);
  }

  @Get()
  findAll() {
    return this.categoryPhotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryPhotosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryPhotoDto: UpdateCategoryPhotoDto) {
    return this.categoryPhotosService.update(+id, updateCategoryPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryPhotosService.remove(+id);
  }
}
