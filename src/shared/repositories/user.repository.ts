import { User } from "shared/database/entities/user.entity";
import { CreateUserDTO } from "shared/dto/createUser.dto";
import { UpdateUserRequestDTO } from "shared/dto/UpdateUserRequest.dto";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository <User>{
  async createUser (dto: CreateUserDTO): Promise <User>{
    const user = this.create(dto);
    return await this.save(user)
  }

  async findAllUser(): Promise<User[]> {
    return await this.find(); 
  }
    
  async findOneUser(id: string): Promise<User | undefined> {
    return await this.findOne(
    { id },
    );
  }
    
  async updateUser(dto: UpdateUserRequestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async deleteUser(id: string): Promise<void> {
    this.delete(id);
  }
}