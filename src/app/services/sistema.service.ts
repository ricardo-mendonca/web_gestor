import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { BancoModel } from '../models/BancoModel';


@Injectable({
    providedIn: 'root'
})

export class SistemaService {
    constructor( private httpClient : HttpClient){
    }

    private readonly baseUrl = environment["endpoint"];

    AdicionarSistemaFinanceiro(bancoModel:BancoModel)
    {
        return  this.httpClient.post(`${this.baseUrl}/CreateBanco`,
        bancoModel);
    }

}
