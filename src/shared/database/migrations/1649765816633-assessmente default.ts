import {MigrationInterface, QueryRunner} from "typeorm";

export class assessmenteDefault1649765816633 implements MigrationInterface {
    name = 'assessmenteDefault1649765816633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "assessment" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "assessment" DROP DEFAULT`);
    }

}
