import { Sexo } from "./Sexo";

export class Persona {
    idPersona:number;
    nombre:string;
    apellido:string;
    sexo:Sexo 

  constructor(
    idPersona: number, 
    nombre: string, 
    apellido: string, 
    sexo: Sexo 
) {
    this.idPersona = idPersona
    this.nombre = nombre
    this.apellido = apellido
    this.sexo = sexo
  }

}