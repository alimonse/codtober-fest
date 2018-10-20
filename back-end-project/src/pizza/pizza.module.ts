import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PizzaController } from "./pizza.controller";
import { PizzaService } from "./pizza.service";
import { PizzaEntity } from "./pizza.entity";


@Module({
    imports:[TypeOrmModule.forFeature([PizzaEntity])],
    controllers:[PizzaController],
    providers:[PizzaService]
})




export class PizzaModule{}