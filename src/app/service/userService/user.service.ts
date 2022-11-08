import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

Registration(data:any){
  console.log(data)
  let header = {
    headers:new HttpHeaders({
    'Content-type':'application/json'
    })
    }
    return this.http.postservice('/user/register/', data,false,header)
  }

  Login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    console.log(header)
    return this.http.postservice('/user/login/',data,false,header)
  }

  Profile(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getservice('/user/profile/', true, header)
  }

}



