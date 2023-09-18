import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';
//import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule(
    {
        providers:[],
        declarations:[ DespesaComponent ],
        imports:[
            CommonModule,
            DespesaRoutingModule,
            NavbarModule,
           // SidebarModule
        ]
    }
)

export class DespesaModule{}
