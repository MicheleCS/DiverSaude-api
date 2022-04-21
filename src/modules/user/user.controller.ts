import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "modules/auth/jwt-auth.guards";
import { instanceToInstance } from "class-transformer";
import { CreateUserRequestDTO } from "shared/dto/createUserRequest.dto";
import { UpdateUserRequestDTO } from "shared/dto/updateUserRequest.dto";
import { UserService } from "./user.service";
import { GetAllUserRequestDTO } from "shared/dto/getAllUserRequest.dto";
import { EvaluateDTO } from "shared/dto/evaluate.dto";


@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @HttpCode(201)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async create(@Body() dto: CreateUserRequestDTO) {
      const user = await this.userService.create(dto);
      return instanceToInstance(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @HttpCode(200)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async findAll(@Query() dto: GetAllUserRequestDTO){
      const findedUsers = await this.userService.findAll(dto);
      return instanceToInstance(findedUsers)
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @HttpCode(200)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async findOne(@Param('id') id:string) {
      return await this.userService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    @HttpCode(204)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async update(@Body() updateUserRequestDTO: UpdateUserRequestDTO) {
      await this.userService.update( updateUserRequestDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('evaluate')
    @HttpCode(204)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async evaluate(@Body() evaluateDTO: EvaluateDTO) {
      await this.userService.evaluate( evaluateDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(204)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async remove(@Param('id')id: string){
      return await this.userService.remove(id);
    }  
}