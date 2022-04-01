import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'modules/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';

@Injectable()
export class AuthService {
    constructor(
      private userService: UserService,
      private jwtService: JwtService,
      @Inject('ENCRYPT_PROVIDER') 
      private encryption: BcryptProvider) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getByEmail(username);
    if (!user) return false
    const passwordMatched = this.encryption.compareHash(password, user.password)
    if (!passwordMatched) return false

    return true
  } 

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}