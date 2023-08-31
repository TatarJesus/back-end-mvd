import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProducersCategories } from '../../producers_categories/entities/producers-categories.entity'; 

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => ProducersCategories, (pc) => pc.category)
  producerCategories: ProducersCategories[];
}
