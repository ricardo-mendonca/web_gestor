import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecuperarsenhaComponent } from './pages/auth/recuperarsenha/recuperarsenha.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './pages/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'login'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', component: LoginComponent
  },
  {
    path:'recuperarsenha', component: RecuperarsenhaComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'banco',
    loadChildren: () => import('./pages/banco/banco.module').then(m => m.BancoModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'despesa',
    loadChildren: () => import('./pages/despesa/despesa.module').then(m => m.DespesaModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
