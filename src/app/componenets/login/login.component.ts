import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any;
  signUpData: any;

  constructor(private authService: AuthService, private router: Router) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  onSubmitlogin() {
    // console.log(this.loginForm.value);

    this.authService.signupGet().subscribe((signUpData) => {
      // console.log('......>>>signUpData', signUpData);
      const userData = signUpData.find(
        (user: any) =>
          user.email === this.loginForm.value.email &&
          user.password === this.loginForm.value.password
      );
      if (userData) {
        this.authService.loggedInData.next(userData);
        localStorage.setItem('saveData',JSON.stringify(userData))
        alert('loggin successfully');
         this.router.navigate(['dash']);
      } else {
        alert('Pleaer enter correct Email & Password');
      }
    });
  }
}
