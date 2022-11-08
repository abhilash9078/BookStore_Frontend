import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cartService/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cart_details:any;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.displayCartItems()
  }

  displayCartItems() {
    console.log('Display Cart Items Api Calling')
    this.cart.display_cart().subscribe((res: any) => {
      console.log(res)
      this.cart_details=res.data

    })
  }

}
