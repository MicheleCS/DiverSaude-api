import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { instanceToInstance } from "class-transformer";
import { CreateUserRequestDTO } from "shared/dto/createUserRequest.dto";
import { UpdateUserRequestDTO } from "shared/dto/UpdateUserRequest.dto";
import { UserService } from "./user.service";


@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() dto: CreateUserRequestDTO) {
      const user = await this.userService.create(dto);
      return instanceToInstance(user);
    }

    @Get()
    @HttpCode(200)
    async findAll(){
      return await this.userService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    async findOne(@Param('id') id:string) {
      return await this.userService.findOne(id);
    }

    @Patch()
    @HttpCode(204)
    async update(@Body() updateUserRequestDTO: UpdateUserRequestDTO) {
      await this.userService.update(updateUserRequestDTO.id, updateUserRequestDTO);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id')id: string){
      return await this.userService.remove(id);
    }    
}