import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confpassword: new FormControl(null, [Validators.required]),
    });
  }

  onSubmitSignup() {
    this.authService.signupGet().subscribe((userData) => {
      // console.log('....userdata', userData);

      const userEmail = userData.find(
        (user: any) => user.email === this.signUpForm.value.email
      );

      if (userEmail) {
        alert('email already exist');
      } else {
        this.authService
          .signUpPost(this.signUpForm.value)
          .subscribe((signUpData) => {
            // console.log('....>>signUpData', signUpData);
            this.signUpForm.reset();
            this.router.navigate(['login']);
          });
      }
    });
  }
}
