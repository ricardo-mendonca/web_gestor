import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPStatus, LoaderInterceptor } from './interceptor/loader.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuard } from './pages/guards/auth-guard.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { RecuperarsenhaComponent } from './pages/auth/recuperarsenha/recuperarsenha.component';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import { MAT_DATE_LOCALE } from '@angular/material/core';


const RxJS = [LoaderInterceptor, HTTPStatus];

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
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      closeButton:true,
    }),
    NgxMaskDirective, 
    NgxMaskPipe
   

  ],
  providers: [
    AuthGuard,
    RxJS,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    provideNgxMask(),
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

  ],
  bootstrap: [AppComponent],
  exports:
  [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class AppModule { }
