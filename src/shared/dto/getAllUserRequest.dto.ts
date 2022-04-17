import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsString } from "class-validator";

export class GetAllUserRequestDTO {
    @ApiProperty()
    @IsString()
    gender?: string;

    @ApiProperty()
    @IsString()
    specialty?: string;

    @ApiProperty()
    @IsString()
    city?: string;
}