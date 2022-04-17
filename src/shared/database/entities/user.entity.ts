import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
  @IsString()
  @Column({nullable: true})
  gender?: string;

  @ApiProperty()
  @IsNumber()
  @Column({nullable: true})
  cellPhone?: number;

  @ApiProperty()
  @IsString()
  @Column({nullable: true})
  street?: string;
  
  @ApiProperty()
  @IsNumber()
  @Column({nullable: true})
  number?: number;

  @ApiProperty()
  @IsString()
  @Column({nullable: true})
  neighborhood?: string;

  @ApiProperty()
  @IsString()
  @Column({nullable: true})
  city?: string;

  @ApiProperty()
  @IsString()
  @Column({nullable: true})
  state?: string;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  crmCrp?: string;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  specialty?: string;

  @ApiProperty()
  @IsNumber()
  @Column({ nullable: true})
  phone?: number;
 
  @ApiProperty()
  @IsNumber()
  @Column({ nullable: true})
  value?: number;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  description?: string;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  courses?: string;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  healthPlan?: string;

  @ApiProperty()
  @IsBoolean()
  @Column({ nullable: true})
  bathroomSpecific?: boolean;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  linkedin?: string;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true})
  attendance?: string;

  @ApiProperty()
  @IsNumber()
  @Column({ nullable: true, default: 0 })
  assessment?: number;

  @ApiProperty()
  @IsNumber()
  @Column({ nullable: true})
  assessmentSum?: number;

  @ApiProperty()
  @IsNumber()
  @Column({ nullable: true, type: 'float'})
  average?: number;




  @OneToMany(() => Role, (Role) => Role.user)
  @JoinColumn({ name: 'role_id' })
  public roles?: Role;
}