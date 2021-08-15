import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-read-persona',
  templateUrl: './read-persona.component.html',
  styleUrls: ['./read-persona.component.css']
})
export class ReadPersonaComponent implements OnInit {

  personas:Persona[] = [];

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.listarPersonas();
    console.log(this.personas);
  }


  listarPersonas(){
    this.personaService.listarPersonas().subscribe(
      data=>{
        this.personas = data;
      },
      error=>{
        alert("Hubo un error al obtener");
      });
  }


}
