import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StarredProducers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  producer_id: number;

  @Column()
  user_id: number;
}
