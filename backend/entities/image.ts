import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Image {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    subscribeId!: number;

    @Column()
    imageId!: number;

    @Column()
    basicContractId!: string;

    @Column()
    filename!: string;

    @Column()
    contractDate!: Date;

    @CreateDateColumn()
    createDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;
}