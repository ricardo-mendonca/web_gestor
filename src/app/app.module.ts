import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './pages/auth/login/login.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecuperarsenhaComponent } from './pages/auth/recuperarsenha/recuperarsenha.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarsenhaComponent,
    CadastroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,


    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class AppModule { }
