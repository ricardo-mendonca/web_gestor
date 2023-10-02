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
}
