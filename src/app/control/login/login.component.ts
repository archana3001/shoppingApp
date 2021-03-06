import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  constructor(public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
      this.signinForm = this.fb.group({
        email: ['',  Validators.required, Validators.email],
        password: ['',  Validators.required]
      })
     }


  ngOnInit(): void {
  }
  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }
}
