import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { StarredProducersService } from './starred-producers.service';
  import { CreateStarredProducersDto } from './dto/create-starred-producers.dto';
  import { UpdateStarredProducersDto } from './dto/update-starred-producers.dto';
  
  @Controller('starred-producers')
  export class StarredProducersController {
    constructor(private readonly starredProducersService: StarredProducersService) {}
  
    @Post()
    create(@Body() createStarredProducersDto: CreateStarredProducersDto) {
      return this.starredProducersService.create(createStarredProducersDto);
    }
  
    @Get()
    findAll() {
      return this.starredProducersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.starredProducersService.findOne(+id);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateStarredProducersDto: UpdateStarredProducersDto,
    ) {
      return this.starredProducersService.update(+id, updateStarredProducersDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.starredProducersService.remove(+id);
    }
  }
  