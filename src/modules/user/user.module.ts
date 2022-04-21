import { Module } from '@nestjs/common';
import {UserController} from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'shared/repositories/user.repository';
import { UserService } from './user.service';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { RoleRepository } from 'shared/repositories/role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, RoleRepository])],
  controllers:[UserController],
  providers: [UserService, { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }],
  exports: [UserService]
})
export class UserModule {}