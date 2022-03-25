import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'shared/database/entities/role.entity';
import { CreateRoleRequestDTO } from 'shared/dto/createRoleRequest.dto';
import { UpdateRoleRequestDTO } from 'shared/dto/updateRoleRequest.dto';
import { RoleRepository } from 'shared/repositories/role.repository';
import { EntityNotFoundError } from 'typeorm';


@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async create(dto: CreateRoleRequestDTO){
    return await this.repository.createRole(dto);
  }

  async findAll() {
    return await this.repository.find();
  }
 
  async findOne(id: string) {
    return await this.repository.findOne(id);   
  }

  async update(id: string, updateRoleRequestDTO: UpdateRoleRequestDTO) : Promise <void>{
    const updatedRole = await this.repository.update(id, updateRoleRequestDTO);
    if (!updatedRole.affected){
      throw new EntityNotFoundError(Role, id);
    }
  }

  async remove(id: string) {
    await this.repository.delete(id);   
  }
} 