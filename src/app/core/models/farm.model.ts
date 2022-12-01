import { Tile } from "./tile.model";


export interface Farm {

    //Identificación
    id:number;
    name:string;

    //Número de tiles que vas a tener
    tileAmount:number;
    //Lista de tiles
    tiles: Array<Tile>
    
}