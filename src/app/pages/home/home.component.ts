import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../core/components/input/input.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required]
    });
  }

  onRegister(): void {
    window.location.href = 'http://localhost:4202';
    if (this.registrationForm.valid) {
      const userName = this.registrationForm.get('userName')!.value;
      console.log('User Name:', userName);
      const script = document.createElement('script');
      document.body.appendChild(script);
    } else {
      alert('Por favor preencha o campo de usuário');
    }
  }
}