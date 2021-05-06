import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Users } from "./Users";

@Entity("notices")
export class Notices {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;
    @JoinColumn({ name: "userId" })
    @ManyToOne(() => Users)
    userId: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
