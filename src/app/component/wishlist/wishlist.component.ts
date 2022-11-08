import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlistService/wishlist.service'; 

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  product_list:any;

  constructor(private wishlist:WishlistService) { }

  ngOnInit(): void {
    this.displayCartItems()
  }

  displayCartItems() {
    console.log('Display Wishlist Items Api Calling')
    this.wishlist.getWishlist().subscribe((res: any) => {
      console.log(res)
      this.product_list = res.data

    })
  }

  deleteWishlist(prod_id:any){
    console.log('Delete Wishlist Api calling..')
    this.wishlist.deleteWishlist(prod_id).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
