import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaModel } from 'src/app/models/CategoriaModel';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public categoriaService: CategoriaService,
  ) {}
  categoriaForm: FormGroup;

  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  dadorForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    //debugger;
    var dados = this.dadorForm();
    console.log(dados);

    let item = new CategoriaModel();
    item.descricao = dados['name'].value;
    item.ativo = '1';
    item.usuarioId = '0';
    item.id = '0';

    this.categoriaService.CreateCategoria(item).subscribe(
      (response:CategoriaModel) => {
        this.categoriaForm.reset();
      },
      (error) => console.error(error),
      () => {}
    );
  }
}
