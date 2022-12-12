import { AuthGuard } from './service/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { LoginComponent } from './componenets/login/login.component';
import { SignUpComponent } from './componenets/sign-up/sign-up.component';
import { HeaderComponent } from './componenets/header/header.component';
import { CartComponent } from './componenets/cart/cart.component';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'dash',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'header',component:HeaderComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
