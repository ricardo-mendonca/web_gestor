import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BancoModel } from 'src/app/models/BancoModel';
import { BancoService } from 'src/app/services/banco.service';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.scss'],
})
export class BancoComponent {
  //#region Paginacao
  tipoTela: number = 1; // 1 listagem, 2 cadastro, 3 edição
  tableListSistemas: Array<BancoModel>;
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
    this.sistemaForm.reset();
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

  ListaBancoUsuario() {
    this.itemEdicao = null;
    this.tipoTela = 1;

    this.bancoService.GetBancos().subscribe(
      (response: Array<BancoModel>) => {
        this.tableListSistemas = response;

      },
      (error) => console.error(error),
      () => {}
    );
  }
  //#endregion

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public bancoService: BancoService,
    public authService: AuthService,
    private toastr: ToastrService
  ) {}

  sistemaForm: FormGroup;
  color = '#673ab7';
  checkedAtivo = true;
  disabledAtivo = false;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.configpag();

    this.ListaBancoUsuario();

    this.sistemaForm = this.formBuilder.group({
      descricao: ['', [Validators.required]],
    });
  }

  ShowSucess(msg) {
    this.toastr.success(msg);
  }
  handleChangeAtivo(item: any) {
    this.checkedAtivo = item.checked as boolean;
  }

  dadorForm() {
    return this.sistemaForm.controls;
  }

  enviar() {
    //debugger;
    var dados = this.dadorForm();
    if (this.itemEdicao) {
      this.itemEdicao.descricao = dados['descricao'].value;
      this.itemEdicao.usuarioId = '0';

      if (this.checkedAtivo == true) {
        this.itemEdicao.ativo = '1';
      } else {
        this.itemEdicao.ativo = '0';
      }

      console.log(this.itemEdicao);

      this.bancoService.UpdateBanco(this.itemEdicao).subscribe(
        (response: BancoModel) => {
          this.ShowSucess('Alterado com sucesso!');

          this.sistemaForm.reset();
          this.ListaBancoUsuario();
        },
        (error) => console.error(error),
        () => {}
      );
    } else {
      let item = new BancoModel();
      item.descricao = dados['descricao'].value;
      item.usuarioId = '0';
      item.id = 0;
      if (this.checkedAtivo == true) {
        item.ativo = '1';
      } else {
        item.ativo = '0';
      }

      console.log(item);

      this.bancoService.CreateBanco(item).subscribe(
        (response: BancoModel) => {
          this.ShowSucess('Salvo com sucesso!');

          this.sistemaForm.reset();
          this.ListaBancoUsuario();
        },
        (error) => console.error(error),
        () => {}
      );
    }
  }

  //#region ALTERAR CADASTRO
  itemEdicao: BancoModel;

  edicao(id: number) {
    this.bancoService.GetBancoId(id).subscribe(
      (response: BancoModel) => {
        if (response) {
          this.itemEdicao = response;
          this.tipoTela = 2;

          var dados = this.dadorForm();
          dados['descricao'].setValue(this.itemEdicao.descricao);

          if (this.itemEdicao.ativo == '0') {
            this.checkedAtivo = false;
          } else {
            this.checkedAtivo = true;
          }
        }
      },
      (error) => console.error(error),
      () => {}
    );
  }

  //#endregion
}
