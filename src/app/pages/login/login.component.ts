import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit(): void {}
  onTogglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    console.log('form', this.loginForm);
    this.route.navigate(['/list']);
  }
}
