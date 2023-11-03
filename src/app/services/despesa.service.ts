import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { DespesaModel } from '../models/DespesaModel';

@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  constructor(private httpClient: HttpClient) {}

  private readonly baseURL = environment['endpoint'];

  CreateDespesa(despesa: DespesaModel) {
    return this.httpClient.post<DespesaModel>(
      `${this.baseURL}/CreateDespesa`,
      despesa
    );
  }

  GetDespesaMes(dataI:Date, dataF:Date){
    return this.httpClient.get(`${this.baseURL}/GetDespesaMes?dataI=${dataI}&dataF=${dataF}`);
  }

  GetDespesasId(Id: number){
    return this.httpClient.get(`${this.baseURL}/GetDespesasId?id=${Id}`);
  }

  UpdateDespesa(despesa: DespesaModel){
    return this.httpClient.put<DespesaModel>(`${this.baseURL}/UpdateDespesa/${despesa.id}`,despesa);
  }

}
