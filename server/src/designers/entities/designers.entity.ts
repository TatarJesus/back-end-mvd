import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('designers')
export class Designers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ nullable: true })
  links: string;
}