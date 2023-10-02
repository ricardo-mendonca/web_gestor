import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoComponent } from './banco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BancoRoutingModule } from './banco-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';

@NgModule(
    {
        providers:[],
        declarations:[ BancoComponent ],
        imports:[
          CommonModule,
          BancoRoutingModule,
          NavbarModule,
          ReactiveFormsModule,

          NgxPaginationModule,
          FormsModule,
          NgSelectModule,
          MatIconModule,

        ]
    }
)

export class BancoModule{}
