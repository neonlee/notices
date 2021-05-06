import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createNotices1619817916519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "notices",
                columns: [
                    {
                        name: "title",
                        type: "varchar(200)"
                    },
                    {
                        name: "id",
                        type: "varchar(200)",
                        isPrimary: true
                    },
                    {
                        name: "description",
                        type: "varchar(200)"
                    },
                    {
                        name: "create_at",
                        type: "datetime",
                        default: "now()"
                    },
                    {
                        name: "userId",
                        type: "varchar(200)",
                    },
                ],
                foreignKeys: [{
                    name: "fkUserId",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["userId"],
                    onDelete: "cascade",
                    onUpdate: "cascade"
                }]

            }),
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("notices");
    }

}
