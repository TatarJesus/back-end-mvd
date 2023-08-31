import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('category_closure')
export class CategoryClosure {
  @PrimaryColumn()
  ancestor_id: number;

  @PrimaryColumn()
  descendant_id: number;

  @Column({ type: 'int' })
  depth: number;
}
