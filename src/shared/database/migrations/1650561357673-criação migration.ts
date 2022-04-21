import {MigrationInterface, QueryRunner} from "typeorm";

export class criaçãoMigration1650561357673 implements MigrationInterface {
    name = 'criaçãoMigration1650561357673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "experience" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellPhone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cellPhone" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "value" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bathroomSpecific"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "bathroomSpecific" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bathroomSpecific"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "bathroomSpecific" boolean`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "value" integer`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" integer`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" integer`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellPhone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cellPhone" integer`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "experience"`);
    }

}
