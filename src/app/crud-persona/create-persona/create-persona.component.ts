import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sexo } from 'src/app/models/Sexo';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css']
})
export class CreatePersonaComponent implements OnInit{

  persona: Persona = <Persona>{nombre:"",apellido:""}

  personaForm: any;
  
  constructor(private personaService:PersonaService, private formBuilder: FormBuilder ) { 
    
  }
  ngOnInit(): void {
    this.inicializarPersonaForm();
  }

  inicializarPersonaForm(){
    this.personaForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(20),  Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+')]],
      apellido:['',[Validators.required,Validators.minLength(8), Validators.maxLength(20),  Validators.pattern('[a-zñáéíóú A-ZÑÁÉÍÓÚ]+')]],
    });
  }
  get nombre(){
    return this.personaForm.get('nombre');
  }
  get apellido(){
    return this.personaForm.get('apellido');
  }
  // get habilitado(){
  //   return this.personaForm.get('habilitado');
  // }


  registrarPersona(){
    this.persona.nombre = this.nombre.value;
    this.persona.apellido = this.apellido.value;
    alert(this.persona);
    console.log(this.persona);
    //this.persona.nombre = 
    // this.personaService.registrarPersona(this.persona).subscribe(
    //   data=>{

    //   },
    //   error=>{

    //   });
  }
}
