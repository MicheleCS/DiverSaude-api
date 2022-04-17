import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserRequestDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsString()
    name?: string;

    @ApiProperty()
    @IsString()
    email?: string;

    @ApiProperty()
    @IsString()
    password?: string;

    @ApiProperty()
    @IsString()
    cpf?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
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

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    assessment?: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    assessmentSum?: number;

    @ApiProperty()
    @IsNumber()
    average?: number;
}