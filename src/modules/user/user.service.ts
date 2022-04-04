import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'shared/database/entities/user.entity';
import { CreateUserRequestDTO } from 'shared/dto/createUserRequest.dto';
import { GetAllUserRequestDTO } from 'shared/dto/getAllUserRequest.dto';
import { UpdateUserRequestDTO } from 'shared/dto/updateUserRequest.dto';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { UserRepository } from 'shared/repositories/user.repository';
import { EntityNotFoundError } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository, 
    @Inject('ENCRYPT_PROVIDER') 
    private encryption: BcryptProvider,
  ) {}

  async create(dto: CreateUserRequestDTO){
    const hashedPassword = await this.encryption.createHash(dto.password)
    return await this.repository.createUser({...dto, password: hashedPassword});
  }

  async findAll(dto: GetAllUserRequestDTO) {
    return await this.repository.findAllUser(dto);
  }
 
  async findOne(id: string) {
    return await this.repository.findOneUser(id);   
  }

  async update( updateUserRequestDTO: UpdateUserRequestDTO) : Promise <void>{
    const findedUser = await this.repository.findOneUser(updateUserRequestDTO.id)
    if (!findedUser){
      throw new EntityNotFoundError(User, updateUserRequestDTO.id);
    }
    
    await this.repository.updateUser( updateUserRequestDTO);
  }

  async remove(id: string) {
    await this.repository.deleteUser(id);   
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return await this.repository.findOne({email:email});
  }  
} 