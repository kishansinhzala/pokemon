import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './componenets/sign-up/sign-up.component';
import { LoginComponent } from './componenets/login/login.component';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componenets/header/header.component';
import { CartComponent } from './componenets/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
