import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoModel } from 'src/app/models/BancoModel';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.scss']
})
export class BancoComponent {
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public sistemaService: SistemaService
  ) {}

  sistemaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuilder.group({
      descricao: ['', [Validators.required]],
    });
  }

  dadorForm() {
    return this.sistemaForm.controls;
  }

  enviar() {
    //debugger;
    var dados = this.dadorForm();

console.log(dados);

    let item = new BancoModel();
    item.descricao = dados["descricao"].value;
    item.ativo = "1";
    item.usuarioId="0";
    item.id="0";

    this.sistemaService.AdicionarSistemaFinanceiro(item).subscribe(
      (response: BancoModel) => {
        this.sistemaForm.reset();
      },
      (error) => console.error(error),
      () => {}
    );
  }
}
