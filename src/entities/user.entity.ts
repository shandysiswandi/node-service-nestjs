import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { BaseUUIDEntity } from './base.entity';

@Entity({ name: 'users' })
export class User extends BaseUUIDEntity {
  constructor(partial?: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @Column({
    name: 'name',
    type: 'varchar',
    length: 100,
  })
  public name: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 100,
    unique: true,
  })
  public email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 100,
  })
  @Exclude()
  public password: string;
}
