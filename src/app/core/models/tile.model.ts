import { Farmeable } from "./farmeable.model";

export interface Tile{
    
    id:number;
    farmeable : Farmeable|null;
    image:string;
    //Tiempo plantado
}