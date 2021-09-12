import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  Roles: any = ['Admin', 'Developer', 'Employee'];
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { 
  this.signupForm = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)],
    admintype:['', Validators.required]
  })
}
  ngOnInit(): void {}
  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset()
        this.router.navigate(['']);
      }
    })
  }

}
