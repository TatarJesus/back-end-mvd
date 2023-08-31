import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ default: false })
  is_verified: boolean;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  price_min: number;

  @Column({ nullable: true })
  price_max: number;

  @Column()
  url_website: string;

  @Column()
  url_telegram: string;

  @Column({ nullable: true })
  url_instagram: string;

  @Column({ nullable: true })
  url_youtube: string;

  @Column({ nullable: true })
  url_facebook: string;

  @Column({ nullable: true })
  url_vkontakte: string;

  @Column({ nullable: true })
  url_whatsapp: string;

  @Column({ nullable: true })
  url_rutube: string;

  @Column({ nullable: true })
  url_livemaster: string;

  @Column({ nullable: true })
  url_odnoklassniki: string;

  @Column({ nullable: true })
  producers_categories_id: number;
}
