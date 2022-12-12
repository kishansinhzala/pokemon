import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) { }
  dashBoradData: any[] = [];
  ngOnInit(): void {
    this.authService.dashboardtget().subscribe((dash) => {
      // console.log('.......>>>>>', dash);
      this.dashBoradData = dash;
    });
  }

  onAddCart(index: number) {
    this.authService.cartGet().subscribe((cartData) => {
      console.log('cartData.....', cartData);


      let cartAdddData = cartData.find(
        (res: any) => res.id === this.dashBoradData[index].id
      );
      console.log('....hhhh', cartAdddData);

      if (cartAdddData) {
        cartAdddData.qty++;

        this.authService.cartPatch(cartAdddData).subscribe((patchData) => {
          console.log(patchData);
        });
      } else {
        this.authService
          .cartPost(this.dashBoradData[index])
          .subscribe((cartpost) => {
            console.log('cartpost', cartpost);

            this.authService.cartGet().subscribe((cartProduct) => {
              this.authService.cartData.next(cartProduct);
              console.log('cartProduct', cartProduct);
            });
          });
      }
    });
  }
}
