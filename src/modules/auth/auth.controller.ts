import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import { LoginDTO } from 'shared/dto/login.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() LoginDTO: LoginDTO) {
        return await this.authService.login(LoginDTO);
    }
}