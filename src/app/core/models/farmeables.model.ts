
export interface Farmeable {

    //Identificación
    id:number;
    name:string;
    
    //Control del tiempo
    days_to_harvest:number;
    create_date:string;


    //Valor en monedas
    purchase_value:number;
    sale_value:number;
}