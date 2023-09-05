import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryCardsService } from './category_cards.service';
import { CreateCategoryCardDto } from './dto/create-category_card.dto';
import { UpdateCategoryCardDto } from './dto/update-category_card.dto';

@Controller('category-cards')
export class CategoryCardsController {
  constructor(private readonly categoryCardsService: CategoryCardsService) {}

  @Post()
  create(@Body() createCategoryCardDto: CreateCategoryCardDto) {
    return this.categoryCardsService.create(createCategoryCardDto);
  }

  @Get()
  findAll() {
    return this.categoryCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryCardDto: UpdateCategoryCardDto) {
    return this.categoryCardsService.update(+id, updateCategoryCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryCardsService.remove(+id);
  }
}
