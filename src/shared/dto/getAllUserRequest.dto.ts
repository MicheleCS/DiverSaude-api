import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsString } from "class-validator";

export class GetAllUserRequestDTO {
    @ApiProperty()
    @IsEmpty()
    @IsString()
    gender?: string;

    @ApiProperty()
    @IsEmpty()
    @IsString()
    specialty?: string;

    @ApiProperty()
    @IsEmpty()
    @IsString()
    city?: string;
}