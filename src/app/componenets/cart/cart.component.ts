import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  totalPrice=0;
  totalqty=0;
  constructor(private authService: AuthService,
              private router:Router) {}

  ngOnInit(): void {
    this.authService.cartGet().subscribe(cartget=>{
      console.log("cartget",cartget);
      this.cart=cartget


      this.cart.forEach(element => {
        this.totalPrice=this.totalPrice+(element.price*element.qty)
        this.totalqty=this.totalqty+element.qty
        console.log(this.totalPrice);

      });
    })
  }
  onPlaceOrder(){

    this.totalPrice=0;
    this.totalqty=0;
  }
}
