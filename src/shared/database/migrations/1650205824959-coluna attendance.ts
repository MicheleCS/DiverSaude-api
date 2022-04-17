import {MigrationInterface, QueryRunner} from "typeorm";

export class colunaAttendance1650205824959 implements MigrationInterface {
    name = 'colunaAttendance1650205824959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "attendance" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "attendance"`);
    }

}
