import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  add_wishlist(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token 
      })
    }
    return this.http.postservice('/wishlist/add/', data, true, header)
  }

  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token 
      })
    }
    return this.http.getservice('/wishlist/view/',true,header)
  }

  deleteWishlist(prod_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token 
      })
    }
    return this.http.deleteservice('/wishlist/delete/'+prod_id,true,header)
  }
}
