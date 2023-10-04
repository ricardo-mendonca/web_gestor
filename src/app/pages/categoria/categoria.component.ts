import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoriaModel } from 'src/app/models/CategoriaModel';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  //#region Paginacao
  tipoTela: number = 1; // 1 listagem, 2 cadastro, 3 edição
  tableListSistemas: Array<CategoriaModel>;
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
    this.categoriaForm.reset();
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

  ListaCategoriaUsuario() {
    this.tipoTela = 1;

    this.categoriaService.GetCategorias().subscribe(
      (response: Array<CategoriaModel>) => {
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
    public categoriaService: CategoriaService,
    private toastr: ToastrService
  ) {}
  categoriaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;
    this.configpag();
    this.ListaCategoriaUsuario();

    this.categoriaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  ShowSucess() {
    this.toastr.success('Salvo com sucesso!');
  }
  dadorForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    //debugger;
    var dados = this.dadorForm();
    //console.log(dados);

    let item = new CategoriaModel();
    item.descricao = dados['name'].value;
    item.ativo = '1';
    item.usuarioId = '0';
    item.id = '0';

    this.categoriaService.CreateCategoria(item).subscribe(
      (response: CategoriaModel) => {
        this.ShowSucess();
        this.categoriaForm.reset();
        this.ListaCategoriaUsuario();
      },
      (error) => console.error(error),
      () => {}
    );
  }
}
