import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private httpClient: HttpClient) {
    }

    private readonly baseUrl = environment["endpoint"];

    login(email: string, senha: string) {

        return this.httpClient.post(`${this.baseUrl}/login`, { email: email, senha: senha });
    }

}
