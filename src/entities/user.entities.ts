import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Schedule } from "./schedules.entities";
@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "varchar", length: 45 })
  name: string;
  @Column({ type: "varchar", length: 45, unique: true })
  email: string;
  @Column({ default: false })
  admin: boolean;
  @Column({ type: "varchar", length: 120 })
  password: string;
  @CreateDateColumn({ type: "date" })
  createdAt: Date;
  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;
  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: Date;
  @OneToMany(() => Schedule, (Schedule) => Schedule.user)
  schedule: Schedule[];
}
export { User };
