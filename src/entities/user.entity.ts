import { Column, Entity } from 'typeorm';
import { BaseUUIDEntity } from './base.entity';

@Entity({ name: 'users' })
export class User extends BaseUUIDEntity {
  constructor(init?: Partial<User>) {
    super();
    Object.assign(this, init);
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
  public password: string;
}
