import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('favourite')
export class Favourite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_id: number;

  @Column({ nullable: false })
  producer_id: number;
}
