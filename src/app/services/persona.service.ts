import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url =  'http://localhost:8080/api/persona/';
  constructor(private http:HttpClient) { }

  registrarPersona(persona:Persona):Observable<Persona>{
    const url_enviada= this.url+'insertar';  
    return this.http.post<any>(url_enviada,persona);
  }

  listarPersonas():Observable<Persona[]>{
    const url_enviada= this.url+'listar';  
    return this.http.get<Persona[]>(url_enviada);
  }

  editarPersona(persona:Persona):Observable<Persona>{
    const url_enviada= this.url+'editar';  
    return this.http.post<any>(url_enviada,persona);
  }

  buscarPersona(idPersona:number):Observable<Persona>{
    const url_enviada= this.url+'buscar/'+idPersona;  
    return this.http.get<Persona>(url_enviada);
  }
}
