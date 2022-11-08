import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  add_cart(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token 
      })
    }
    return this.http.postservice('/cart/add/', data, true, header)
  }

  display_cart(){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })

    }
    return this.http.getservice('/cart/view_cart/',true,header)
  }

  update_cart(data:any,cart_id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.putservice('/cart/update/'+cart_id,data,true,header)
  }

  delete_cart(cart_id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.deleteservice('/cart/delete/'+cart_id,true,header)
  }
}
