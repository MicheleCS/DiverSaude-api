import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsOptional, IsString } from "class-validator";

export class GetAllUserRequestDTO {
    @ApiProperty()
    @IsString()
    @IsOptional()
    gender?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    specialty?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    city?: string;
}