import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "modules/auth/jwt-auth.guards";
import { instanceToInstance } from "class-transformer";
import { CreateRoleRequestDTO } from "shared/dto/createRoleRequest.dto";
import { UpdateRoleRequestDTO } from "shared/dto/updateRoleRequest.dto";
import { RoleService } from "./role.service";



@ApiTags('roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() dto: CreateRoleRequestDTO) {
      const role = await this.roleService.create(dto);
      return instanceToInstance(role);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @HttpCode(200)
    findAll(){
      return this.roleService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @HttpCode(200)
    async findOne(@Param('id') id:string) {
      return await this.roleService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    @HttpCode(204)
    async update(@Body() updateRoleRequestDTO: UpdateRoleRequestDTO) {
      await this.roleService.update(updateRoleRequestDTO.id, updateRoleRequestDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id')id: string){
      return await this.roleService.remove(id);
    }     
}