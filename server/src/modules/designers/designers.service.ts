import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDesignersDto } from './dto/create-designers.dto';
import { UpdateDesignersDto } from './dto/update-designers.dto';
import { Designers } from './entities/designers.entity';

@Injectable()
export class DesignersService {
  constructor(
    @InjectRepository(Designers)
    private readonly designersRepository: Repository<Designers>,
  ) {}

  // Создание пользователя дизайнера
  async create(createDesignersDto: CreateDesignersDto): Promise<Designers> {
    const designer = this.designersRepository.create(createDesignersDto);
    return await this.designersRepository.save(designer);
  }

  // Поиск всех пользователей дизайнеров
  async findAll(): Promise<Designers[]> {
    return await this.designersRepository.find();
  }

  // Поиск определенного пользователя дизайнера
  async findOne(id: number): Promise<Designers> {
    const designer = await this.designersRepository.findOne({
      where: { id: id },
    });
    if (!designer) {
      throw new NotFoundException(`Designer with id ${id} not found`);
    }
    return designer;
  }

  // Обновление данных определенного пользователя дизайнера
  async update(
    id: number,
    updateDesignersDto: UpdateDesignersDto,
  ): Promise<Designers> {
    await this.findOne(id);
    await this.designersRepository.update(id, updateDesignersDto);
    return this.findOne(id);
  }

  // Удаление определенного пользователя дизайнера
  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.designersRepository.delete(id);
  }
}
