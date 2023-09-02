import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProducerCategory } from '../../producers_categories/entities/producer-category.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => ProducerCategory, (pc) => pc.id)
  producerCategories: ProducerCategory[];
}
