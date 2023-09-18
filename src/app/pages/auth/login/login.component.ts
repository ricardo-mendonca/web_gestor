import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    public authService: AuthService

  ){}

  loginForm: FormGroup ;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
      }
    );
  }

  get dadosForm() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.loginService
      .login(this.dadosForm['email'].value, this.dadosForm['senha'].value)
      .subscribe(
        (ret) => {
          console.log(ret);
          console.log(ret["nome"]);

          this.authService.setToken(ret["accessToken"].toString());
          this.authService.UsuarioAutenticado(true);
          this.authService.setUsuarioName(ret["nome"]);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          var resposta = error;
        //console.log(resposta.error.message);
        resposta = resposta.error.message;
        alert(resposta);
        }
      );
  }
}
