import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecuperarSenhaService } from 'src/app/services/recuperarSenha.service';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.component.html',
  styleUrls: ['./recuperarsenha.component.scss']
})
export class RecuperarsenhaComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private recuperarSenhaService: RecuperarSenhaService,
    private toastr: ToastrService
  ) {}

  recuperarsenhaForm: FormGroup;

  ngOnInit(): void {
    this.recuperarsenhaForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  get dadosForm() {
    return this.recuperarsenhaForm;
  }

  ShowSucess(msg) {
    this.toastr.success(msg);
  }
  ShowErro(msg){
    this.toastr.error(msg);
  }

  forgotUser() {
    this.recuperarSenhaService
    .ResetPassword(this.dadosForm.value['email'] )
    .subscribe(
      (ret) => {

        var resposta = ret;
        resposta = resposta["message"];
        this.ShowSucess(resposta);

        this.router.navigate(['/login']);
      },
      (error) => {
        var resposta = error;
        this.ShowErro(resposta.error.message);
      }
    );
  }
}
