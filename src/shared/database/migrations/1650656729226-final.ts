import {MigrationInterface, QueryRunner} from "typeorm";

export class final1650656729226 implements MigrationInterface {
    name = 'final1650656729226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "linkedin"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "linkedin" character varying`);
    }

}
