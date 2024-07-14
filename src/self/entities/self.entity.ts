import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SelfChild } from './self-child.entity';

@Entity()
export class Self {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => SelfChild, (s) => s.self_parent, {
    cascade: true,
  })
  self_childs: SelfChild[];
}
