import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url =  'localhost:8080/api/persona/';
  constructor(private http:HttpClient) { }

  registrarPersona(persona:Persona):Observable<Persona>{
    const url_enviada= this.url+'insertar';  
    return this.http.post<any>(url_enviada,persona);
  }

  listarPersonas(){
    
  }

  editarPersona(){

  }

  eliminar(){

  }
}
