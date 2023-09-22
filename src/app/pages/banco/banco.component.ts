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
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public bancoService: BancoService,
    public authService: AuthService,
    private toastr: ToastrService
  ) {}

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

  ListaSistemasUsuario() {
    this.tipoTela = 1;

    this.bancoService.GetBancos().subscribe(
      (response: Array<BancoModel>) => {
        this.tableListSistemas = response;
      },
      (error) => console.error(error),
      () => {}
    );
  }

  sistemaForm: FormGroup;

  ShowSucess() {
    this.toastr.success('Salvo com sucesso!');
  }

  ngOnInit() {
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

    let item = new BancoModel();
    item.descricao = dados['descricao'].value;
    item.ativo = '1';
    item.usuarioId = '0';
    item.id = '0';

    this.bancoService.CreateBanco(item).subscribe(
      (response: BancoModel) => {
        this.ShowSucess();

        this.sistemaForm.reset();
      },
      (error) => console.error(error),
      () => {}
    );
  }
}
