import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  createOrder(data:any, product_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token 
      })
    }
    return this.http.postservice('/order/checkout/'+product_id,data, true, header)
  }
}
