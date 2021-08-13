import { Sexo } from "./Sexo";

export interface Persona {
    id:number;
    nombre:string;
    apellido:string;
    sexo: Sexo;
}
