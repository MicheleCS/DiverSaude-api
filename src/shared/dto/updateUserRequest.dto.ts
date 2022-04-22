import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserRequestDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    email?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    password?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    cpf?: string;

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
    number?: string;

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
    @IsOptional()
    average?: number;
}