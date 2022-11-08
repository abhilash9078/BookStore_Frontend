import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cartService/cart.service';
import { OrderService } from 'src/app/service/orderService/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart_items:any;
  address:string='';
  state:string='';
  city:string='';
  placeorder: any = false;
  continue_check: any=false;

  constructor(private cart: CartService, private order:OrderService) { }

  ngOnInit(): void {
    this.displayCartItems()
    console.log(this.address)
  }

  displayCartItems() {
    console.log('Display Cart Items Api Calling')
    this.cart.display_cart().subscribe((res: any) => {
      console.log(res)
      this.cart_items = res.data

    })
  }

  AddCartItems(quant: any, cart_id: any) {
    console.log('Add Cart Items Api Calling')
    let data = {
      "quantity": quant + 1
    }
    this.cart.update_cart(data, cart_id).subscribe((res: any) => {
      console.log(res)
      console.log(cart_id)
    })
  }

  RemoveCartItems(quant: any, cart_id: any) {
    console.log('Remove Cart Items Api Calling')
    if (quant < 1) {
      return
    }
    let data = {
      "quantity": quant - 1
    }
    this.cart.update_cart(data, cart_id).subscribe((res: any) => {
      console.log(res)
    })
  }

  delCartItems(id: any) {
    console.log('Delete Cart Item Api Calling')
    this.cart.delete_cart(id).subscribe((res: any) => {
      console.log(res)
    })
  }

  CheckoutOrder(prod_id:any) {
    let data = {
      shipping_address: this.address+this.city+this.state
    }
    console.log('Order Api Calling')
    this.order.createOrder(data,prod_id).subscribe((res: any) => {
      console.log(res)
    })
  }

  placeOrder() {
    this.placeorder = true
  }

  checkout(){
    this.continue_check = true
  }

}
