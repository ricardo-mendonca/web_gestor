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

  //#region Paginacao
  tipoTela: number = 1; // 1 listagem, 2 cadastro, 3 edição
  tableListDespesa: Array<DespesaModel>;
  id: string;

  page: number = 1;
  config: any;
  paginacao: boolean = true;
  itemsPorPagina: number = 10;

  configpag() {
    this.id = this.gerarIdParaConfigDePaginacao();

    this.config = {
      id: this.id,
      currentPage: this.page,
      itemsPerPage: this.itemsPorPagina,
    };
  }

  gerarIdParaConfigDePaginacao() {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  cadastro() {
    this.tipoTela = 2;
    this.despesaForm.reset();
  }

  mudarItemsPorPage() {
    this.page = 1;
    this.config.currentPage = this.page;
    this.config.itemsPerPage = this.itemsPorPagina;
  }

  mudarPage(event: any) {
    this.page = event;
    this.config.currentPage = this.page;
  }

  ListaDespesaUsuario() {
    this.tipoTela = 1;

    this.despesaService.GetDespesaMes().subscribe(
      (response: Array<DespesaModel>) => {

        this.tableListDespesa = response;
      },
      (error) => console.error(error),
      () => {}
    );
  }
  //#endregion

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
    this.menuService.menuSelecionado = 2;
    this.configpag();
    this.ListaDespesaUsuario();

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



    this.despesaService.CreateDespesa(item).subscribe(
      (response: DespesaModel) => {
        this.ShowSucess();
        this.despesaForm.reset();
        this.ListaDespesaUsuario();
      },
      (error) => console.error(error),

      () => {}
    );
  }
//#region editar despesa
  itemEdicao: DespesaModel;

  edicao(id:number){

    this.despesaService.GetDespesasId(id).subscribe(
      (response: DespesaModel) =>{
        if(response){
          this.itemEdicao = response;
          this.tipoTela =2;

          console.log(this.itemEdicao);
          var dados = this.dadorForm();
          dados['descricao'].setValue(this.itemEdicao.descricao);
dados['dataVencimento'].setValue(this.itemEdicao.dataVencimento);
dados['dataPagamento'].setValue(this.itemEdicao.dataPagamento);
dados['valorParcela'].setValue(this.itemEdicao.valorParcela);
dados['valorMulta'].setValue(this.itemEdicao.valorMulta);
dados['valorDesconto'].setValue(this.itemEdicao.valorDesconto);
dados['qtdParcela'].setValue(this.itemEdicao.qtdParcela);


          if (this.itemEdicao.pago == '0') {this.checkedPago = false;} else {this.checkedPago = true;}

          if (this.itemEdicao.despesaFixa == '0') {this.checkedFixo = false;} else {this.checkedFixo = true;}
        }
      },
      (error) => console.error(error)
    );

  }

  //#endregion
}
