import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_card_id: number;

  @Column()
  photo_url: string;
}
