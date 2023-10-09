import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent,
  },
  //{ path:'categoria', component: CategoriaComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
  ],
})
export class CategoriaRoutingModule {}
