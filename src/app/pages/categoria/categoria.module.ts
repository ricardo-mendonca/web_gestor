import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule(
    {
        providers:[],
        declarations:[ CategoriaComponent ],
        imports:[
          CommonModule,
          CategoriaRoutingModule,
          NavbarModule,
          ReactiveFormsModule,

          NgxPaginationModule,
          FormsModule,
          NgSelectModule,
          MatIconModule,
          MatSlideToggleModule,
        ]
    }
)

export class CategoriaModule{}
