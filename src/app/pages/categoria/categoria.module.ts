import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule(
    {
        providers:[],
        declarations:[ CategoriaComponent ],
        imports:[
          CommonModule,
          CategoriaRoutingModule,
          NavbarModule,
          FormsModule,
          ReactiveFormsModule,

        ]
    }
)

export class CategoriaModule{}
