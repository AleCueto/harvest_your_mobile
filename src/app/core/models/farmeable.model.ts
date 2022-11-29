
export interface Farmeable {

    //Identificación
    id:number;
    name:string;
    
    //Control del tiempo
    seconds_to_harvest:number; // tiempo a transcurrir


    //Valor en monedas
    purchase_value:number;
    sale_value:number;

    //Cantidad de tal que tienes
    amount:number;

    //Visual
    image_beggining:string;
    image_middle:string;
    image_end:string;
}