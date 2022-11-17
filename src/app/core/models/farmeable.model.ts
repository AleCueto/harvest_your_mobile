
export interface Farmeable {

    //Identificación
    id:number;
    name:string;
    
    //Control del tiempo
    days_to_harvest:number;
    create_date:string; //Esto va en el tile


    //Valor en monedas
    purchase_value:number;
    sale_value:number;

    //Cantidad de tal que tienes
    amount:number;

    //Visual
    image:string;
}