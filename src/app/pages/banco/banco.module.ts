import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoComponent } from './banco.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BancoRoutingModule } from './banco-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule(
    {
        providers:[],
        declarations:[ BancoComponent ],
        imports:[
          CommonModule,
          BancoRoutingModule,
          NavbarModule,
          ReactiveFormsModule
        ]
    }
)

export class BancoModule{}
