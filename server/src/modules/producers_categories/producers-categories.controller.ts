import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProducersCategoriesService } from './producers-categories.service';
import { CreateProducerCategoryDto } from './dto/create-producer-category.dto';
import { UpdateProducerCategoryDto } from './dto/update-producer-category.dto';

@Controller('producers-categories')
export class ProducersCategoriesController {
  constructor(private readonly service: ProducersCategoriesService) {}

  @Post()
  create(@Body() createDto: CreateProducerCategoryDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProducerCategoryDto,
  ) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
