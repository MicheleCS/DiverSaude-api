import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserRequestDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

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
    gender: string;

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
}