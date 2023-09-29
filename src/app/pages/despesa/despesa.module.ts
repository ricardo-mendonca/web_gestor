import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


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
          NgSelectModule,
        ],
        schemas: [],
    }
)

export class DespesaModule{}
