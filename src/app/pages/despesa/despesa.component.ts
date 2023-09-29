import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BancoService } from 'src/app/services/banco.service';
import { BancoModel } from 'src/app/models/BancoModel';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss'],
})
export class DespesaComponent {
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public bancoService: BancoService,
  ) {}

  listaDeBancos = new Array<SelectModel>();
  sistemaSelect = new SelectModel();
  listCategorias = new Array<SelectModel>();
  categoriaSelect = new SelectModel();
  despesaFixa = new SelectModel();
  pago = new SelectModel();

  despesaForm: FormGroup;

  ngOnInit() {
     this.despesaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      data: ['', [Validators.required]],
      categoriaSelect: ['', [Validators.required]],
      despesaFixa: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valorParcela: ['', [Validators.required]],
      valorMulta: ['', [Validators.required]],
      valorDesconto: ['', [Validators.required]],
      pago: ['', [Validators.required]],
      dataVencimento: ['', [Validators.required]],
      dataPagamento: ['', [Validators.required]],
      qtdParcela: ['', [Validators.required]],
    });

    this.ListaBancoUsuario();
  }

  dadorForm() {
    return this.despesaForm.controls;
  }

  enviar() {
    //debugger
    var dados = this.dadorForm();

    console.log(dados);
  }

  formatarMoeda(event) {
    var v = event.target.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2);
    v = v.replace('.', ',');
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    event.target.value = 'R$ ' + v;
  }

  ListaBancoUsuario(){
    this.bancoService.GetBancos()
    .subscribe((response : Array<BancoModel>) => {

      var listBancoUsuario = [];

      response.forEach(x => {
        var item = new SelectModel();
        item.id = x.id.toString();
        item.name = x.descricao

        listBancoUsuario.push(item);

      });

      this.listaDeBancos = listBancoUsuario;
    })

  }

}
