import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1619642575616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    { name: "name", type: "varchar(200)" },
                    { name: "username", type: "varchar(200)", isPrimary: true, isNullable: false },
                    { name: "email", type: "varchar(200)", isPrimary: true, isNullable: false },
                    { name: "id", type: "varchar(200)", isPrimary: true, isUnique: true },
                    {
                        name: "create_at",
                        type: "datetime",
                        default: "now()"
                    },
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("users");
    }

}
