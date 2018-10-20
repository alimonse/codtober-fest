import { PizzaEntity } from "pizza/pizza.entity";

export function calcularPrecioPizza(pizza:PizzaEntity){
    
    
    const sizes = {"Small": 5,"Medium":8, "Large":11 }
    const precioPorSize = sizes[pizza.size]
    
    const ingredients= {"Extra cheese":1, "Anchovies":2 , "Pineapple":1 , "Onions":1, "Caviar": 5, "Kobe Beef":10}
    const precioIngredients = pizza.ingredients.reduce((p,c)=>{
        return p+ingredients[c]
    },0)
    
    return precioPorSize+precioIngredients

}