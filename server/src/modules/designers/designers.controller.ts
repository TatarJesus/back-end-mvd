import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesignersService } from './designers.service';
import { CreateDesignersDto } from './dto/create-designers.dto';
import { UpdateDesignersDto } from './dto/update-designers.dto';

@Controller('designers')
export class DesignersController {
  constructor(private readonly designersService: DesignersService) {}

  @Post()
  create(@Body() createDesignersDto: CreateDesignersDto) {
    return this.designersService.create(createDesignersDto);
  }

  @Get()
  findAll() {
    return this.designersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDesignersDto: UpdateDesignersDto,
  ) {
    return this.designersService.update(+id, updateDesignersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designersService.remove(+id);
  }
}
