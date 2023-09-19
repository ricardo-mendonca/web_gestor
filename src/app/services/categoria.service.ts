import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { CategoriaModel } from '../models/CategoriaModel';


@Injectable({
  providedIn: 'root',
})


export class CategoriaService{
  constructor(private httpClient: HttpClient) {}

  private readonly baseURL = environment['endpoint'];



  CreateCategoria(categoria: CategoriaModel) {
    console.log(this.baseURL);
    return this.httpClient.post<CategoriaModel>(`${this.baseURL}/CreateCategoria`, categoria);
  }

}
