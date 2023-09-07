import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDTO } from './dto/create-content.dto';
import { UpdateContentDTO } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDTO) {
    return this.contentService.create(createContentDto);
  }

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(+id);
  }

  @Get('/news')
  findAllNews() {
    return this.contentService.findAllNews();
  }

  @Get('/article')
  findAllArticle() {
    return this.contentService.findAllArticle();
  }

  @Get('/promo')
  findAllPromo() {
    return this.contentService.findAllPromo();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDTO) {
    return this.contentService.update(+id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentService.remove(+id);
  }
}
