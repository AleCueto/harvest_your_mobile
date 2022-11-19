import { Farmeable } from "./farmeable.model";
import * as moment from 'moment';

export interface Tile{
    
    id:number;
    farmeable : Farmeable|null;
    image:string;
    
    //Tiempo plantado
    create_date:moment.Moment | null; //Esto va en el tile

    //Control recolección
    canRecolect:boolean;
}