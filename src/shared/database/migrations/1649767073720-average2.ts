import {MigrationInterface, QueryRunner} from "typeorm";

export class average21649767073720 implements MigrationInterface {
    name = 'average21649767073720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "average"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "average" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "average"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "average" integer`);
    }

}
