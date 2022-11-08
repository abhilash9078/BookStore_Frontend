import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'; 
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';
import { SingleBookDetailsComponent } from './component/single-book-details/single-book-details.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { OrderComponent } from './component/order/order.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot-password',component:ForgotpasswordComponent},
  {path:'dashboard', component:DashboardComponent,
    children:[
      {path:'books', component:GetallbooksComponent},
      {path:'book/:data', component:SingleBookDetailsComponent},
      {path:'cart', component:CartComponent},
      {path:'wishlist', component:WishlistComponent},
      {path:'order', component:OrderComponent},
      {path:'profile', component:ProfileComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
