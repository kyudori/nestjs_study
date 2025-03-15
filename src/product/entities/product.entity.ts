import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comments } from '../../comments/entities/comment.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public price: number;

  @Column()
  public imageUrl: string;

  @OneToMany(() => Comments, (comment) => comment.product, { cascade: true })
  comments: Comment[];
}
