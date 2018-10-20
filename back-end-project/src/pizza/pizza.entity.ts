import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('pizza')

export class PizzaEntity{

    @PrimaryGeneratedColumn()
    id?:number;
    
    @Column()

    name: string;
    @Column()
    address:string;
    @Column()
    phone: number;
    @Column()
    size: string;
    @Column("simple-array") 
    ingredients: string[]; 
    
    @Column({default:0})
    total?: number;
}
