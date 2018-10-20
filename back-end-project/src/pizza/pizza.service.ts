import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PizzaEntity } from "./pizza.entity";
import { calcularPrecioPizza } from "./funciones-pizza/calcularPrecioPizza";

Injectable()

export class PizzaService{
    
    constructor(
        @InjectRepository(PizzaEntity)
        private readonly _PizzaRepository : Repository<PizzaEntity>
    ){}


    crear(nuevaOrden: any){
        nuevaOrden.total= calcularPrecioPizza(nuevaOrden)
        return this._PizzaRepository.save(nuevaOrden)
        
    }

/*     actualizar(id){
        const pizzaAEditarTotal: PizzaEntity 
        pizzaAEditarTotal=this.obtenerUno(id)
        return this._PizzaRepository.update(pizzaAEditarTotal.total)
    } */

 



    obtenerTodos(){
        return this._PizzaRepository.find()

    }

    obtenerUno(id){
        return this._PizzaRepository.findOne(id)
    }
   
}