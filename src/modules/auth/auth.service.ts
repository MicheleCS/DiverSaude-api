import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'shared/repositories/user.repository';
import { LoginDTO } from 'shared/dto/login.dto';
import { RoleRepository } from 'shared/repositories/role.repository';
import { usernameOrPasswordInvalid } from './constants';

@Injectable()
export class AuthService {
    constructor(
      @Inject(UserService)
      private userService: UserService,
      @Inject(JwtService)
      private jwtService: JwtService,
      @Inject('ENCRYPT_PROVIDER') 
      private encryption: BcryptProvider,
      @InjectRepository(UserRepository)
      private userRepository: UserRepository,
      @InjectRepository(RoleRepository)
      private roleRepository: RoleRepository)
     {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getByEmail(username);
    if (!user) return false
    const passwordMatched = this.encryption.compareHash(password, user.password)
    if (!passwordMatched) return false

    return true
  } 

  async login(user: LoginDTO) {
    const userFinded = await this.userRepository.findByEmail(user.email);
    //if (this.encryption.compareHash(user.password, userFinded.password)) {throw new UnauthorizedException(usernameOrPasswordInvalid);}
    const roles = await this.roleRepository.findOneRole(userFinded.role_id)
    const payload = { email: user.email, sub: userFinded.id };
    const token = await this.jwtService.sign(payload);
    return {
      accessToken: token,
      userRole: roles.name,
      userId: userFinded.id
    };
  }
}