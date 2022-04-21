import {MigrationInterface, QueryRunner} from "typeorm";

export class ajustesEntidade1650574633920 implements MigrationInterface {
    name = 'ajustesEntidade1650574633920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "experience" TO "number"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "number" TO "experience"`);
    }

}
