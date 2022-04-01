import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'modules/user/user.module';import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
;
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5d' },
    }),],
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [AuthService],
  
})
export class AuthModule {}