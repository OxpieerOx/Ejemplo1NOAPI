import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import {DeletePersonaComponent} from './delete-persona/delete-persona.component';
import { ReadPersonaComponent } from './read-persona/read-persona.component';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';

const routes: Routes = [

  {path:'crear-persona',component:CreatePersonaComponent},
  {path:'listar-persona',component:ReadPersonaComponent},
  {path:'editar-persona',component:UpdatePersonaComponent},
  {path:'eliminar-persona',component:DeletePersonaComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPersonaRoutingModule { }
