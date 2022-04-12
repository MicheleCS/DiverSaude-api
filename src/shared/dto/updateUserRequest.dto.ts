import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserRequestDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsString()
    @IsEmpty()
    name?: string;

    @ApiProperty()
    @IsString()
    @IsEmpty()
    email?: string;

    @ApiProperty()
    @IsString()
    @IsEmpty()
    password?: string;

    @ApiProperty()
    @IsEmpty()
    cpf?: string;

    @ApiProperty()
    @IsEmpty()
    gender?: string;

    @ApiProperty()
    @IsEmpty()
    cellPhone?: number;

    @ApiProperty()
    @IsEmpty()
    street?: string;

    @ApiProperty()
    @IsEmpty()
    number?: number;

    @ApiProperty()
    @IsEmpty()
    neighborhood?: string;

    @ApiProperty()
    @IsEmpty()
    city?: string;

    @ApiProperty()
    @IsEmpty()
    state?: string;

    @ApiProperty()
    @IsEmpty()
    crmCrp?: string;

    @ApiProperty()
    @IsEmpty()
    specialty?: string;

    @ApiProperty()
    @IsEmpty()
    phone?: number;

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

    @ApiProperty()
    @IsEmpty()
    @IsNumber()
    assessment?: number;

    @ApiProperty()
    @IsEmpty()
    @IsNumber()
    assessmentSum?: number;
}