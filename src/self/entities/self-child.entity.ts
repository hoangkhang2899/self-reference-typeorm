import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Self } from './self.entity';

@Entity()
export class SelfChild {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parent_id: number;
  @ManyToOne(() => Self, (s) => s.self_childs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_id' })
  self_parent: Self;

  @Column()
  child_id: number;
  @ManyToOne(() => Self, (s) => s.self_childs, {
    eager: true,
  })
  @JoinColumn({ name: 'child_id' })
  self_child: Self;
}
