import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum ContentType {
  NEWS = 'news',
  ARTICLE = 'article',
  PROMO = 'promo',
}

@Entity('content')
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ContentType })
  type: ContentType;

  @Column({ unique: true })
  slug: string;

  @Column()
  card: string;

  @Column()
  title: string;

  @Column('text')
  body: string;

  @Column({ nullable: true })
  link: string;

  @Column({ nullable: true })
  section_id: number;
}
