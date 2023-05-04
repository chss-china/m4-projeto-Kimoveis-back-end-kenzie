import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
} from "typeorm";
import { RealEstate } from "./realEstate.entities";
@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "varchar", length: 45 })
  street: string;
  @Column({ type: "varchar", length: 8 })
  zipCode: string;
  @Column({ type: "varchar", length: 7, nullable: true })
  number: string;
  @Column({ type: "varchar", length: 20 })
  city: string;
  @Column({ type: "varchar", length: 2 })
  state: string;
  @OneToOne(() => RealEstate, (RealEstate) => RealEstate.address)
  realEstate: RealEstate;
}
export { Address };