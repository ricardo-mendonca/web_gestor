import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { registerService } from 'src/app/services/register.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private registerService: registerService,
    private toastr: ToastrService
    ) {}

  CadastroForm: FormGroup;

  ngOnInit(): void {
    this.CadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      telefone: ['', [Validators.required]],
    });
  }

  get dadosForm() {
    return this.CadastroForm.controls;
  }

  ShowSucess(msg) {
    this.toastr.success(msg);
  }
  ShowErro(msg){
    this.toastr.error(msg);
  }

  cadastrarUser(){
    this.registerService
    .CreateUsuario(this.dadosForm['nome'].value, this.dadosForm['email'].value, this.dadosForm['senha'].value , this.dadosForm['telefone'].value)
    .subscribe(
      (ret) => {
        //var resposta = ret;
        this.ShowSucess("Cadastro realizado com sucesso!");

        this.router.navigate(['/login']);
      },
      (err) => {
        var resposta = err.error;
        resposta = resposta["message"];

        this.ShowErro(resposta);
      }
    );
  }



  formatarTelefone(event) {
    let v = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const tamanhoMaximo = 11;
    if (v.length > tamanhoMaximo) {
      v = v.slice(0, tamanhoMaximo); // Limita o tamanho máximo do número de celular
    }
    if (v.length > 2) {
      v = `(${v.substring(0, 2)}) ${v.substring(2)}`; // Insere os parênteses no código de área
    }
    if (v.length > 8) {
      v = `${v.substring(0, 9)}${v.substring(9)}`; // Insere o hífen entre os dígitos do número de celular
    }
    event.target.value = v;
  }

}
