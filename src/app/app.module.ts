import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './pages/guards/auth-guard.service';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTPStatus, LoaderInterceptor } from './interceptor/loader.interceptor';
import { RecuperarsenhaComponent } from './pages/auth/recuperarsenha/recuperarsenha.component';


import { ToastrModule } from 'ngx-toastr';






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
    MatSlideToggleModule,
    MatIconModule,

    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    RxJS,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class AppModule { }
