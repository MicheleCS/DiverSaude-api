import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from './config/env';
import { getDatabaseConfigConnection } from './config/env/connection';
import { UsersModule } from './users/users.module';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    UsersModule,
  ],
})
export class AppModule {}
