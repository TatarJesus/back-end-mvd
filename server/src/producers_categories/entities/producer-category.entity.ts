import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producers_categories')
export class ProducerCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column({ nullable: true })
  photos: string;
}
