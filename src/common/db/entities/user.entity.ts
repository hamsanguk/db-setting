import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  userId: string; 

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
//@Entity를 정의하면 typeORM이 그 클래스를 DB테이블로 인식
//클래스의 속성이 @Column이 DB테이블의 컬럼이 된다
//nestjs에서 이 구조를 기반으로 데이터를 조회하거나 저장되는 repository객체를 자동으로 생성

// @Column({ type: 'text' })
// name: string;

// @Entity('users')
// export class User {
