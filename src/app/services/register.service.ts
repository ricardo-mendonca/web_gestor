import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";


@Injectable({
  providedIn: 'root'
})

export class registerService{
  constructor(private httpClient: HttpClient) {
  }

  private readonly baseUrl = environment["endpoint"];

  CreateUsuario(nome: string, email: string, senha: string, telefone: string) {

      return this.httpClient.post(`${this.baseUrl}/CreateUsuario`, { nome: nome, email: email, senha: senha, telefone: telefone });
  }
}



