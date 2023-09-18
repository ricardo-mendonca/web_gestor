import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.component.html',
  styleUrls: ['./recuperarsenha.component.scss']
})
export class RecuperarsenhaComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,

  ) {}

  recuperarsenhaForm: FormGroup;

  ngOnInit(): void {
    this.recuperarsenhaForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  get dadosForm() {
    return this.recuperarsenhaForm;

  }

  forgotUser() {

  }
}
