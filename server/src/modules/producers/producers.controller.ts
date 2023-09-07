import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProducersService } from './producers.service';
import { CreateProducersDto } from './dto/create-producers.dto';
import { UpdateProducersDto } from './dto/update-producers.dto';
import { SearchProducersDto } from './dto/search-producers.dto';

@Controller('producers')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}

  @Post()
  create(@Body() createProducersDto: CreateProducersDto) {
    return this.producersService.create(createProducersDto);
  }

  @Get()
  findAll() {
    return this.producersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producersService.findOne(+id);
  }

  @Get('/search/:address/:min_price/:max_price/:category_name')
  findAllSearch(@Param() searchProducersDto: SearchProducersDto) {
    return this.producersService.searchAll(searchProducersDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProducersDto: UpdateProducersDto,
  ) {
    return this.producersService.update(+id, updateProducersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producersService.remove(+id);
  }
}
