import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPersonaRoutingModule } from './crud-persona-routing.module';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { ReadPersonaComponent } from './read-persona/read-persona.component';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';
import { DeletePersonaComponent } from './delete-persona/delete-persona.component';
import { RecursoFooterComponent } from '../recursos/recurso-footer/recurso-footer.component';
import { RecursosModule } from '../recursos/recursos.module';


@NgModule({
  declarations: [
    CreatePersonaComponent,
    ReadPersonaComponent,
    UpdatePersonaComponent,
    DeletePersonaComponent
  ],
  imports: [
    CommonModule,
    CrudPersonaRoutingModule,
    RecursosModule
  ]
})
export class CrudPersonaModule { }
