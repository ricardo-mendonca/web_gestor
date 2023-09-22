import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";


@Injectable({
  providedIn: 'root'
})

export class RecuperarSenhaService{
  constructor(private httpClient: HttpClient) {
  }

  private readonly baseUrl = environment["endpoint"];

  ResetPassword(email: string){
    console.log("ResetPassword");
    console.log(this.baseUrl);

      return this.httpClient.post(`${this.baseUrl}/ResetPassword`, { email: email });
  }
}



