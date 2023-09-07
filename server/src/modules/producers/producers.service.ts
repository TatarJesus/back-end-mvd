import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
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
  async create(createProducersDto: CreateProducersDto) {
    const producer = this.producersRepository.create(createProducersDto);
    return await this.producersRepository.save(producer);
  }

  // Поиск всех производителей
  async findAll() {
    return await this.producersRepository.find();
  }

  // Поиск одного производителя по ID
  async findOne(id: number) {
    return await this.producersRepository.findOne({ where: { id: id } });
  }

  // Фильтрация производителей по рейтингу
  async filterRating(arrayCategoryCard?: CategoryCard[]) {
    if (!arrayCategoryCard) {
      const producers = await this.producersRepository.find();

      return producers.sort((firstProducer, secondProducer) => {
        if (firstProducer.rating > secondProducer.rating) {
          return 1;
        }
        if (firstProducer.rating < secondProducer.rating) {
          return -1;
        }
        return 0;
      });
    }

    const idsCategory = arrayCategoryCard.map((CategoryCard) => {
      return CategoryCard.producer_id;
    });

    const producers = await this.producersRepository.findBy({
      id: In(idsCategory),
    });

    return producers.sort((firstProducer, secondProducer) => {
      if (firstProducer.rating > secondProducer.rating) {
        return 1;
      }
      if (firstProducer.rating < secondProducer.rating) {
        return -1;
      }
      return 0;
    });
  }

  // Поиск производителей по адресу, цене и товару
  async searchAll(searchProducersDto: SearchProducersDto) {
    const addressResult =
      searchProducersDto.address !== 'none'
        ? await this.categoryCardRepository.find({
            where: { showroom_address: searchProducersDto.address },
          })
        : undefined;

    const categoryResult =
      searchProducersDto.category_name !== 'none'
        ? await this.categoryCardRepository.find({
            where: { category_name: searchProducersDto.category_name },
          })
        : undefined;

    const priceResult =
      searchProducersDto.min_price !== 'none' ||
      searchProducersDto.max_price !== 'none'
        ? await this.categoryCardRepository.find({
            where: {
              min_price: MoreThanOrEqual(
                searchProducersDto.min_price !== 'none'
                  ? +searchProducersDto.min_price
                  : 0,
              ),
              max_price: LessThanOrEqual(
                searchProducersDto.max_price !== 'none'
                  ? +searchProducersDto.max_price
                  : 1000000,
              ),
            },
          })
        : undefined;

    const array: CategoryCard[][] = [];
    addressResult && array.push(addressResult);
    categoryResult && array.push(categoryResult);
    priceResult && array.push(priceResult);

    switch (array.length) {
      case 0:
        return await this.filterRating();
      case 1:
        return await this.filterRating(array[0]);
      case 2:
        const filter = array[0].filter((categoryCard, index) => {
          try {
            return (
              JSON.stringify(categoryCard) === JSON.stringify(array[1][index])
            );
          } catch (err) {
            return false;
          }
        });

        return await this.filterRating(filter);
      case 3:
        const filterFirst = array[0].filter((categoryCard, index) => {
          try {
            return (
              JSON.stringify(categoryCard) === JSON.stringify(array[1][index])
            );
          } catch (err) {
            return false;
          }
        });

        const filterSecond = filterFirst.filter((categoryCard, index) => {
          try {
            return (
              JSON.stringify(categoryCard) === JSON.stringify(array[2][index])
            );
          } catch (err) {
            return false;
          }
        });

        return await this.filterRating(filterSecond);
    }
  }

  // Обновление производителя
  async update(id: number, updateProducersDto: UpdateProducersDto) {
    return await this.producersRepository.update(id, updateProducersDto);
  }

  // Удаление производителя
  async remove(id: number) {
    return await this.producersRepository.delete(id);
  }
}
