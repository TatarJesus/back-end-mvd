import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  producer_id: number;

  @Column()
  category_name: string;

  @Column()
  showroom_address: string;

  @Column()
  min_price: number;

  @Column()
  max_price: number;
}
