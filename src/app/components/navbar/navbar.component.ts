import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    public authService: AuthService
  ){}


  home() {
    // Security.clear();
    this.router.navigate(['/dashboard']);
  }
  banco() {
    // Security.clear();
    this.router.navigate(['/banco']);
  }
  categoria() {
    // Security.clear();
    this.router.navigate(['/categoria']);
  }
  despesa() {
    // Security.clear();
    this.router.navigate(['/despesa']);
  }
  logout() {
    // Security.clear();
    this.authService.limparToken();
    this.authService.limparDadosUsuario();
    this.router.navigate(['/login']);
  }

}
