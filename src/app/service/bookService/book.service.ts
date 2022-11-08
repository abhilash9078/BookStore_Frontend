import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpService) { }

  getAllBooks(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.getservice('/book/all_book/', false, header)
  }
}
