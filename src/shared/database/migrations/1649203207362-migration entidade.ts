import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationEntidade1649203207362 implements MigrationInterface {
    name = 'migrationEntidade1649203207362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "cellPhone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "street" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "neighborhood" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "state" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "state" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "neighborhood" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "street" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "cellPhone" SET NOT NULL`);
    }

}
