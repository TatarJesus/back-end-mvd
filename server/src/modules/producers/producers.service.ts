import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducersDto } from './dto/create-producers.dto';
import { UpdateProducersDto } from './dto/update-producers.dto';
import { Producers } from './entities/producers.entity';
import { SearchProducersDto } from './dto/search-producers.dto';
import { CategoryCard } from '../category_cards/entities/category_card.entity';

@Injectable()
export class ProducersService {
  constructor(
    @InjectRepository(Producers)
    private producersRepository: Repository<Producers>,
    @InjectRepository(CategoryCard)
    private categoryCardRepository: Repository<CategoryCard>,
  ) {}

  // Создание нового производителя
  create(createProducersDto: CreateProducersDto) {
    const producer = this.producersRepository.create(createProducersDto);
    return this.producersRepository.save(producer);
  }

  // Поиск всех производителей
  findAll() {
    return this.producersRepository.find();
  }

  // Поиск одного производителя по ID
  findOne(id: number) {
    return this.producersRepository.findOne({ where: { id: id } });
  }

  async search(searchProducersDto: SearchProducersDto) {
    const addressResult = await this.categoryCardRepository.find({
      where: { showroom_address: searchProducersDto.address },
    });
    const categorySearch = await this.categoryCardRepository.find({
      where: { category_name: searchProducersDto.category_name },
    });
    // const priceSearch = await this.categoryCardRepository.find({
    //   where: { category_name: searchProducersDto.category_name },
    // });
    const filterFirst = addressResult.filter((categoryCard) =>
      categorySearch.includes(categoryCard),
    );
    // const filterSecond = filterFirst.filter((categoryCard) =>
    //   priceSearch.includes(categoryCard),
    // );
    // console.log('The common elements are: ' + filterSecond);
    console.log('The common elements are: ' + filterFirst);
  }

  // Обновление производителя
  update(id: number, updateProducersDto: UpdateProducersDto) {
    return this.producersRepository.update(id, updateProducersDto);
  }

  // Удаление производителя
  remove(id: number) {
    return this.producersRepository.delete(id);
  }
}
