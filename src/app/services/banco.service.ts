import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { BancoModel } from '../models/BancoModel';

@Injectable({
  providedIn: 'root',
})
export class BancoService {
  constructor(private httpClient: HttpClient) {}

  private readonly baseURL = environment['endpoint'];

  CreateBanco(banco: BancoModel) {
    return this.httpClient.post<BancoModel>(`${this.baseURL}/CreateBanco`,banco);
  }

  GetBancos(){
    return this.httpClient.get(`${this.baseURL}/GetBancos`);
  }

  GetBancoId(Id: number) {
    return this.httpClient.get(`${this.baseURL}/GetBancoId/${Id}`);
  }

  //UpdateBanco
  UpdateBanco(banco: BancoModel){

    return this.httpClient.put<BancoModel>(`${this.baseURL}/UpdateBanco/${banco.id}`,banco);

  }
  //DeleteBanco
}
