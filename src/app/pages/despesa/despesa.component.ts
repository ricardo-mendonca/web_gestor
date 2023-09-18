import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss']
})
export class DespesaComponent {
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder
  ) {}

  listSistemas = new Array<SelectModel>();
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
}
