import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    AfterLoad,
    BeforeInsert,
    BeforeUpdate
} from "typeorm";

import Role from './Role';

import * as bcrypt from 'bcrypt';

@Entity({ name: 'admins' })
class Admin extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column({ nullable: true})
    last_name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        nullable: true
    })
    password: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    newPassword: string;

    @AfterLoad()
    private loadTempPassword(): void {
        this.newPassword = this.password;
    }

    @BeforeInsert()
    @BeforeUpdate()
    private encryptPassword() {
        if (this.newPassword !== this.password) {
            this.password = bcrypt.hashSync(this.password, 10);
        }
    }

    public validatePassword(password?: string) {
        return bcrypt.compareSync(password, this.password);
    }

    public hidePassword() {
        delete this.newPassword;
        delete this.password;
    }
}

export default Admin;