import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Secrets } from '../../secrets/entities/secrets.entity';

@Entity('basic_users')
export class BasicUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  role_id: number;

  @Column({ nullable: true })
  visits: number;

  @ManyToOne(() => Secrets)
  @JoinColumn({ name: 'secret_id' })
  secret: Secrets;
}
