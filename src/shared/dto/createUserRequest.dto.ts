import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

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
    @IsOptional()
    gender?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    cellPhone?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    street?: string;

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
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    value?: string;

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
    @IsString()
    @IsOptional()
    bathroomSpecific?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    linkedin?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    attendance?: string;
}