import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryClosureService } from './category-closure.service';
import { CreateCategoryClosureDto } from './dto/create-category-closure.dto';
import { UpdateCategoryClosureDto } from './dto/update-category-closure.dto';

@Controller('category-closure')
export class CategoryClosureController {
  constructor(
    private readonly categoryClosureService: CategoryClosureService,
  ) {}

  @Post()
  create(@Body() createCategoryClosureDto: CreateCategoryClosureDto) {
    return this.categoryClosureService.create(createCategoryClosureDto);
  }

  @Get()
  findAll() {
    return this.categoryClosureService.findAll();
  }

  @Get('/:ancestor_id/:descendant_id')
  findOne(
    @Param('ancestor_id') ancestor_id: number,
    @Param('descendant_id') descendant_id: number,
  ) {
    return this.categoryClosureService.findOne(ancestor_id, descendant_id);
  }

  @Put('/:ancestor_id/:descendant_id')
  update(
    @Param('ancestor_id') ancestor_id: number,
    @Param('descendant_id') descendant_id: number,
    @Body() updateCategoryClosureDto: UpdateCategoryClosureDto,
  ) {
    return this.categoryClosureService.update(
      ancestor_id,
      descendant_id,
      updateCategoryClosureDto,
    );
  }

  @Delete('/:ancestor_id/:descendant_id')
  remove(
    @Param('ancestor_id') ancestor_id: number,
    @Param('descendant_id') descendant_id: number,
  ) {
    return this.categoryClosureService.remove(ancestor_id, descendant_id);
  }
}
