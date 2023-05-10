import { MigrationInterface, QueryRunner } from "typeorm";

export class ConfigurationSchedulesTable1683653507094 implements MigrationInterface {
    name = 'ConfigurationSchedulesTable1683653507094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "date" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "hour" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "hour" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "date" DROP DEFAULT`);
    }

}
