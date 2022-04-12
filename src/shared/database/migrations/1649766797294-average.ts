import {MigrationInterface, QueryRunner} from "typeorm";

export class average1649766797294 implements MigrationInterface {
    name = 'average1649766797294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "average" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "average"`);
    }

}
