import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursoNavberComponent } from './recurso-navber/recurso-navber.component';
import { RecursoFooterComponent } from './recurso-footer/recurso-footer.component';



@NgModule({
  declarations: [
    RecursoNavberComponent,
    RecursoFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecursoFooterComponent,
  ]

})
export class RecursosModule { }
