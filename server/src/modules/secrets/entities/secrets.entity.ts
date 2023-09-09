import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('secrets')
export class SecretsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password_hash: string;

  @Column()
  old_password: string;

  @Column()
  password_salt: string;
}
