import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart: any=[];
  cartProduct:any
  loginUser: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.authService.cartGet().subscribe(product=>{
      this.cart=product;
    })

    this.authService.cartData.subscribe(product=>{
      console.log("products",product);
      this.cart=product;
      console.log("product",this.cart);
    })

    this.authService.loggedInData.subscribe((loginData) => {
      // console.log('headerdata', loginData);
      this.loginUser = loginData;
    });
    this.loginUser = JSON.parse(localStorage.getItem('saveData') as string);
    // console.log(this.loginUser);
}

  onSignOut() {
    this.loginUser = null;
    localStorage.removeItem('saveData');
  }
}
