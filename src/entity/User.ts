import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: 'users' })
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        nullable: true
    })
    password: string;

    @Column({
        nullable: true,
    })
    dob: Date;

    @Column({
        default: 0
    })
    status: number;

    @Column({
        nullable: true
    })
    role: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}

export default User;