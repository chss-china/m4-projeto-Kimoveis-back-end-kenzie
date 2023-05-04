import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./adresses.entities";
import { join } from "path";
import { Category } from "./category.entities";
import { Schedule } from "./schedules.entities";
Entity("real_estate");
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false, nullable: true })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 0,
    nullable: true,
  })
  value: number;

  @Column({ type: "integer" })
  size: number;
  @CreateDateColumn({ type: "date" })
  createdAt: Date;
  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @OneToOne(() => Address, (Address) => Address.realEstate)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Category, (Category) => Category.realstate)
  category: Category[];

  @OneToMany(() => Schedule, (Schedule) => Schedule.realEstate)
  schedule: Schedule[];
}
export { RealEstate };
