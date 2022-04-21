import {MigrationInterface, QueryRunner} from "typeorm";

export class exclusãoColumn1650563140316 implements MigrationInterface {
    name = 'exclusãoColumn1650563140316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "number" character varying`);
    }

}
