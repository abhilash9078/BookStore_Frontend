import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cartService/cart.service';
import { WishlistService } from 'src/app/service/wishlistService/wishlist.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  bookArray:any;
  constructor(private book:BookService, private route:Router, 
                private wishlist:WishlistService, private cart:CartService) { }

  ngOnInit(): void {
    this.get_all_book()
  }

  get_all_book(){
    console.log('get all book api is called')
    this.book.getAllBooks().subscribe((res:any)=>{
      console.log(res)
      this.bookArray=res.data
      console.log(this.bookArray)
    })
  }

  book_details(data:any){
    this.route.navigateByUrl("dashboard/book/"+data)
  }

  addToCart(id: any) {

    console.log('Add to Cart Api Calling')
    let data = {
      book_id:id,
      quantity:1,
    }
    this.cart.add_cart(data).subscribe((res: any) => {
      console.log(res)
    })
    
  }

  addToWishlist(id: any) {
    console.log('Add to WishList Api Calling')
    let data = {
      book_id:id,
    }
    this.wishlist.add_wishlist(data).subscribe((res: any) => {
      console.log(res)
    })
   
  }
}
