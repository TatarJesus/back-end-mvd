import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;
}
