import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaComponent } from './despesa.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: DespesaComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  declarations:[],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,

  ],

})
export class DespesaRoutingModule {}
