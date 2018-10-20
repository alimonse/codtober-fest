import { Controller, Post, Body, Get, Param, BadRequestException } from "@nestjs/common";
import { PizzaService } from "./pizza.service";
import { crearPizza } from "./funciones-pizza/crear-pizza";
import { validate } from "class-validator";

@Controller('pizza')

export class PizzaController{

    constructor(private readonly _PizzaService: PizzaService ){}

    @Get('obtenerUno/:id')
    obtenerUno(
    @Param('id') id) {
        return  this._PizzaService.obtenerUno(id)
    }

    @Get('obtenerTodos')
    obtenerTodos(){
        return this._PizzaService.obtenerTodos()
    }

    @Post('crear')
    async crear(
        @Body('name')name,
        @Body('address')address,
        @Body('phone')phone,
        @Body('size')size,
        @Body('ingredients')ingredients,
    ){
        const pizzaACrearse = crearPizza(name,address,phone,size,ingredients)
        const arregloErrores = await validate(pizzaACrearse)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if (existenErrores) {
            console.error('errores: creando al usuario', arregloErrores)
            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            return this._PizzaService.crear(pizzaACrearse)
        }
        
        
    }   
 


}