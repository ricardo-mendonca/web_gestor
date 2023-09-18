import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaComponent } from './despesa.component';
//import { CategoriaComponent } from '../categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: DespesaComponent,
  },
  //{ path:'categoria', component: CategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaRoutingModule {}
