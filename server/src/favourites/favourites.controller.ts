import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Post()
  create(@Body() createFavouriteDto: CreateFavouriteDto) {
    return this.favouritesService.create(createFavouriteDto);
  }

  @Get()
  findAll() {
    return this.favouritesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favouritesService.remove(+id);
  }
}
