import { Entity, PrimaryColumn, CreateDateColumn, Column } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class Users {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Users }
