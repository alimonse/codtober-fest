import { IsString, IsNotEmpty, } from "class-validator"


export class CrearPizzaDto{
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNotEmpty()
    @IsString() 
    address: string 
    @IsNotEmpty()
    phone: number
    @IsNotEmpty()
    @IsString()
    size: string
 
    @IsNotEmpty()
    
    ingredients: string 
}
