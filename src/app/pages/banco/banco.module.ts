import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoComponent } from './banco.component';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { BancoRoutingModule } from './banco-routing.module';
//import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';



@NgModule(
    {
        providers:[],
        declarations:[ BancoComponent ],
        imports:[
            CommonModule,
            BancoRoutingModule,
            NavbarModule,
           // SidebarModule
        ]
    }
)

export class BancoModule{}
