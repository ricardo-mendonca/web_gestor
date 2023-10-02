import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

import { BancoService } from 'src/app/services/banco.service';
import { BancoModel } from 'src/app/models/BancoModel';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from 'src/app/models/CategoriaModel';
import { DespesaModel } from 'src/app/models/DespesaModel';
import { DespesaService } from 'src/app/services/despesa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss'],
})
export class DespesaComponent {
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public despesaService: DespesaService,
    public bancoService: BancoService,
    public categoriaService: CategoriaService,
    private toastr: ToastrService
  ) {}

  listaDeBancos = new Array<SelectModel>();
  sistemaSelect = new SelectModel();
  listaCategorias = new Array<SelectModel>();
  categoriaSelect = new SelectModel();
  bancoSelect = new SelectModel();
  despesaFixa = new SelectModel();
  pago = new SelectModel();

  colorPago = '#673ab7';
  checkedPago = false;
  disabledPago = false;
  colorFixo = '#673ab7';
  checkedFixo = false;
  disabledFixo = false;

  despesaForm: FormGroup;

  ngOnInit() {
    this.despesaForm = this.formBuilder.group({
      valor: ['', [Validators.required]],
      data: ['', [Validators.required]],
      categoriaSelect: ['', [Validators.required]],
      bancoSelect: ['', [Validators.required]],
      despesaFixa: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valorParcela: ['', [Validators.required]],
      valorMulta: ['', [Validators.required]],
      valorDesconto: ['', [Validators.required]],
      pago: ['', [Validators.required]],
      dataVencimento: ['', [Validators.required]],
      dataPagamento: [''],
      qtdParcela: ['', [Validators.required]],
    });

    this.ListaBancoUsuario();
    this.ListaCategoria();
  }

  dadorForm() {
    return this.despesaForm.controls;
  }

  ShowSucess() {
    this.toastr.success('Salvo com sucesso!');
  }

  handleChangePago(item: any) {
    this.checkedPago = item.checked as boolean;
  }

  handleChangeDespesaFixa(item: any) {
    this.checkedFixo = item.checked as boolean;
  }

  ListaBancoUsuario() {
    this.bancoService.GetBancos().subscribe((response: Array<BancoModel>) => {
      var listBancoUsuario = [];

      response.forEach((x) => {
        var item = new SelectModel();
        item.id = x.id.toString();
        item.name = x.descricao;

        listBancoUsuario.push(item);
      });
      this.listaDeBancos = listBancoUsuario;
    });
  }

  ListaCategoria() {
    this.categoriaService
      .GetCategorias()
      .subscribe((response: Array<CategoriaModel>) => {
        var listCategoria = [];

        response.forEach((x) => {
          var item = new SelectModel();
          item.id = x.id.toString();
          item.name = x.descricao;
          listCategoria.push(item);
        });
        this.listaCategorias = listCategoria;
      });
  }

  enviar() {
    //debugger
    var dados = this.dadorForm();

    let item = new DespesaModel();

    item.descricao = dados['descricao'].value;
    item.qtdParcela = dados['qtdParcela'].value;

    item.ativo = '1';
    if (this.checkedPago == true) {
      item.pago = '1';
    } else {
      item.pago = '0';
    }
    if (this.checkedFixo == true) {
      item.despesaFixa = '1';
    } else {
      item.despesaFixa = '0';
    }

    item.valorParcela = dados['valorParcela'].value;
    item.valorMulta = dados['valorMulta'].value;
    item.valorDesconto = dados['valorDesconto'].value;
    item.dataVencimento = dados['dataVencimento'].value;

    if (dados['dataPagamento'].value != '') {
      item.dataPagamento = dados['dataPagamento'].value;
    }
    item.bancoId = parseInt(this.bancoSelect.id);
    item.categoriaId = parseInt(this.categoriaSelect.id);
    item.usuarioId = 0;

    console.log(item);

    this.despesaService.CreateDespesa(item).subscribe(
      (response: DespesaModel) => {
        this.ShowSucess();
        //this.despesaForm.reset();
      },
      (error) => console.error(error),

      () => {}
    );
  }
}
