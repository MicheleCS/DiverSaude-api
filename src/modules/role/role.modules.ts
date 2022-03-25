import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from 'shared/repositories/role.repository';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  controllers:[RoleController],
  providers: [RoleService],
  exports: [RoleService]
})
export class RoleModule {}