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
    return this.httpClient.post<CategoriaModel>(`${this.baseURL}/CreateCategoria`, categoria);
  }

  GetCategorias(){
    return this.httpClient.get(`${this.baseURL}/GetCategoria`);
  }

  GetCategoriaId(Id: number){
    return this.httpClient.get(`${this.baseURL}/GetCategoriaId/${Id}`);
  }

  UpdateCategoria(categoria: CategoriaModel){

    return this.httpClient.put<CategoriaModel>(`${this.baseURL}/UpdateCategoria/${categoria.id}`,categoria);
  }


}
