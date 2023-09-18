import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { BancoModel } from '../models/BancoModel';

@Injectable({
  providedIn: 'root',
})
export class BancoService {
  constructor(private httpClient: HttpClient) {}

  private readonly baseURL = environment['endPoint'];

  CreateBanco(banco: BancoModel) {
    return this.httpClient.post<BancoModel>(
      `${this.baseURL}/CreateBanco`,
      banco
    );
  }

  //GetBancoId
  GetBancoId(Id: number) {
    return this.httpClient.get(`${this.baseURL}/GetBancoId?Id=${Id}`);
  }

  //GetBancos
  //UpdateBanco
  //DeleteBanco
}
