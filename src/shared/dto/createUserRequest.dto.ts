import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateUserRequestDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty()
    @IsNotEmpty()
    cellPhone: number;

    @ApiProperty()
    @IsNotEmpty()
    street: string;

    @ApiProperty()
    @IsNotEmpty()
    number: number;

    @ApiProperty()
    @IsNotEmpty()
    neighborhood: string;

    @ApiProperty()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsNotEmpty()
    state: string;

    @ApiProperty()
    @IsEmpty()
    crmCrp?: string;

    @ApiProperty()
    @IsEmpty()
    specialty?: string;

    @ApiProperty()
    @IsNotEmpty()
    phone?: number;

    @ApiProperty()
    @IsNotEmpty()
    gender?: string;

    @ApiProperty()
    @IsEmpty()
    value?: number;

    @ApiProperty()
    @IsEmpty()
    description?: string;

    @ApiProperty()
    @IsEmpty()
    courses?: string;

    @ApiProperty()
    @IsEmpty()
    healthPlan?: string;

    @ApiProperty()
    @IsEmpty()
    bathroomSpecific?: boolean;

    @ApiProperty()
    @IsEmpty()
    linkedin?: string;
}