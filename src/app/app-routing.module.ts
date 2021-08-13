import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
      path:'', component:AppComponent,
      children:[
         { path:'home',component:HomeComponent},
         { path: '', redirectTo: 'home', pathMatch: 'prefix' },
         { path:'',loadChildren:()=>import('./crud-persona/crud-persona.module').then(m=>m.CrudPersonaModule) },
         { path: '**', redirectTo: 'home' }
      ]
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
