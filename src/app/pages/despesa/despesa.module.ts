import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { DespesaRoutingModule } from './despesa-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespesaComponent } from './despesa.component';


@NgModule(
    {
        providers:[],
        declarations:[ DespesaComponent ],
        imports:[
          CommonModule,
          DespesaRoutingModule,
          NavbarModule,
          FormsModule,
          ReactiveFormsModule,

        ],
    }
)

export class DespesaModule{}
