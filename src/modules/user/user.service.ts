import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'shared/database/entities/user.entity';
import { CreateUserRequestDTO } from 'shared/dto/createUserRequest.dto';
import { UpdateUserRequestDTO } from 'shared/dto/UpdateUserRequest.dto';
import { UserRepository } from 'shared/repositories/user.repository';
import { EntityNotFoundError } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
  ) {}

  async create(dto: CreateUserRequestDTO){
    return await this.repository.createUser(dto);
  }

  async findAll() {
    return await this.repository.find();
  }
 
  async findOne(id: string) {
    return await this.repository.findOne(id);   
  }

  async update(id: string, updateUserRequestDTO: UpdateUserRequestDTO) : Promise <void>{
    const updatedUser = await this.repository.update(id, updateUserRequestDTO);
    if (!updatedUser.affected){
      throw new EntityNotFoundError(User, id);
    }
  }

  async remove(id: string) {
    await this.repository.delete(id);   
  }
} 