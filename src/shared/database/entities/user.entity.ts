import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsNumber } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Exclude()
  @Column({nullable: false})
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  cpf: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column('uuid')
  role_id: string;

  @ApiProperty()
  @IsEmpty()
  @Column({nullable: true})
  gender?: string;

  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({nullable: true})
  cellPhone?: number;

  @ApiProperty()
  @IsEmpty()
  @Column({nullable: true})
  street?: string;
  
  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({nullable: true})
  number?: number;

  @ApiProperty()
  @IsEmpty()
  @Column({nullable: true})
  neighborhood?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({nullable: true})
  city?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({nullable: true})
  state?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  crmCrp?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  specialty?: string;

  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({ nullable: true})
  phone?: number;
 
  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({ nullable: true})
  value?: number;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  description?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  courses?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  healthPlan?: string;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  bathroomSpecific?: boolean;

  @ApiProperty()
  @IsEmpty()
  @Column({ nullable: true})
  linkedin?: string;

  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({ nullable: true, default: 0 })
  assessment?: number;

  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({ nullable: true})
  assessmentSum?: number;

  @ApiProperty()
  @IsEmpty()
  @IsNumber()
  @Column({ nullable: true, type: 'float'})
  average?: number;




  @OneToMany(() => Role, (Role) => Role.user)
  @JoinColumn({ name: 'role_id' })
  public roles?: Role;
}