import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoComponent } from './banco.component';
//import { CategoriaComponent } from '../categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: BancoComponent,
  },
  //{ path:'categoria', component: CategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoRoutingModule {}
