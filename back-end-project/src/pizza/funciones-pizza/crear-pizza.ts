import { CrearPizzaDto } from "pizza/pizza-dto/pizza-crear-dto";
import { PizzaEntity } from "pizza/pizza.entity";


export function crearPizza(name: string, address: string, phone: number, size: string, ingredients: string) {
    const pizzaNueva = new CrearPizzaDto

    pizzaNueva.name = name,
        pizzaNueva.address = address,
        pizzaNueva.phone = phone,
        pizzaNueva.size = size,
        pizzaNueva.ingredients = ingredients
    
    return pizzaNueva
}

