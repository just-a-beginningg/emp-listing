import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

const CREDENTIALS = {
  username: 'touchworld',
  password: 'touchworldTech',
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  showPassword: boolean = false;
  isSubmitted = false;

  ngOnInit(): void {}

  onTogglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get usernameControl() {
    return this.loginForm.controls['username'];
  }

  get passwordControl() {
    return this.loginForm.controls['password'];
  }

  get errorInUsername() {
    return this.loginForm.controls['username'].value !== CREDENTIALS.username;
  }

  get errorInPassword() {
    return this.loginForm.controls['password'].value !== CREDENTIALS.password;
  }

  onSubmit() {
    console.log('form', this.loginForm);
    this.isSubmitted = true;
    if (
      this.usernameControl.value !== CREDENTIALS.username ||
      this.passwordControl.value !== CREDENTIALS.password
    ) {
      return;
    }

    this.route.navigate(['/list']);
  }
}
