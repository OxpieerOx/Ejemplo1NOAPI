import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
   {path:'', component:AppComponent,
   children:[
      
      {path:'',loadChildren:()=>import('./crud-persona/crud-persona.module').then(m=>m.CrudPersonaModule)},
      {path:'',redirectTo:'',pathMatch:'prefix'},
      {path:'**',redirectTo:''}
   ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
