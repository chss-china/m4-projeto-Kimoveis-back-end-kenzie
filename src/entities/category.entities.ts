import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  ManyToOne,
} from "typeorm";
import { RealEstate } from "./realEstate.entities";
Entity("categories");
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "varchar", length: 45, unique: true })
  name: string;
  @ManyToOne(() => RealEstate)
  realstate: RealEstate;
}
export { Category };
