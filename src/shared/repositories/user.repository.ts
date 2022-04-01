import { User } from "shared/database/entities/user.entity";
import { CreateUserDTO } from "shared/dto/createUser.dto";
import { GetAllUserRequestDTO } from "shared/dto/getAllUserRequest.dto";
import { UpdateUserRequestDTO } from "shared/dto/UpdateUserRequest.dto";
import { EntityRepository, getRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository <User>{
  private ormRepository: Repository<User>;

    constructor() {
      super();
        this.ormRepository = getRepository(User);
    }
  private buildFilter(params: GetAllUserRequestDTO) {
    const gender = params?.gender
    const city = params?.city
    const specialty = params?.specialty
    const query = this.ormRepository.createQueryBuilder('users')
    if (gender) {
      query.andWhere('users.gender = :gender', { gender } )
    }
    if (city) {
      query.andWhere('users.city = :city', { city } )
    }
    if (specialty) {
      query.andWhere('users.specialty = :specialty', { specialty } )
    }
    return query
  }
  async createUser (dto: CreateUserDTO): Promise <User>{
    const user = this.create(dto);
    return await this.save(user)
  }

  async findAllUser(dto: GetAllUserRequestDTO): Promise<User[]> {
    const query = await this.buildFilter(dto)
    const [data, count] = await query.getManyAndCount()
    return data 
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