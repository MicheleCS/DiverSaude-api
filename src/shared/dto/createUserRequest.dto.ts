import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
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
    @IsString()
    gender?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    cellPhone?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    street?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    number?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    neighborhood?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    city?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    state?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    crmCrp?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    specialty?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    phone?: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    value?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    courses?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    healthPlan?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    bathroomSpecific?: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    linkedin?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    attendance?: string;
}