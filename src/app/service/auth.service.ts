import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedInData = new Subject<any>();
  cartData = new Subject<any>();

  signUpPost(signuData: any) {
    return this.http.post<any>('http://localhost:3000/signup', signuData);
  }

  signupGet() {
    return this.http.get<any>('http://localhost:3000/signup');
  }

  dashboardtget(){
    return this.http.get<any>('http://localhost:3000/dashBoard');
  }

  cartGet(){
    return this.http.get<any>('http://localhost:3000/cart');
  }

  cartPost(addCartData:any){
    return this.http.post<any>('http://localhost:3000/cart',addCartData)
  }

  cartPatch(cartData:any){
    return this.http.patch<any>('http://localhost:3000/cart/'+cartData.id,cartData)
  }


}
