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

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.favouritesService.findAll(+id);
  }

  @Delete('/:user_id/:producer_id')
  remove(@Param('user_id') user_id: string, @Param('producer_id') producer_id: string) {
    return this.favouritesService.remove(+user_id, +producer_id);
  }
}
