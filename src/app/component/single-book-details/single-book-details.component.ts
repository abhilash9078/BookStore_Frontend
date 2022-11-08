import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cartService/cart.service';
import { WishlistService } from 'src/app/service/wishlistService/wishlist.service';

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.scss']
})
export class SingleBookDetailsComponent implements OnInit {

  book:any;
  book_details:any;
  bookArray:any;

  constructor(private books:BookService, private aroute:ActivatedRoute, 
                private cart:CartService, private wishlist:WishlistService) { }

  ngOnInit(): void {
    this.single_book_details()
    this.book = this.aroute.snapshot.params['data']
    console.log(this.book)
  }

  single_book_details(){
    console.log("single book details is calling")
    this.books.getAllBooks().subscribe((res: any) => {
      this.bookArray = res.data
      console.log(this.bookArray)
      this.book_details = this.bookArray.filter((book_obj: any) =>{
          return book_obj.id == this.book
      })
      console.log(this.book_details)
    })

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
