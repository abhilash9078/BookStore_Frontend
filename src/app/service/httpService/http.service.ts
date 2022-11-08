import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl

  constructor(private httpClient: HttpClient) { }

  postservice(url: string, data: any, token: boolean = false, httpOptions: any) {
    console.log(data)
    return this.httpClient.post(this.baseUrl + url, data, token && httpOptions)
  }

  getservice(url: string, token: boolean = false, httpOptions: any) {

    return this.httpClient.get(this.baseUrl + url, token && httpOptions)
  }

  deleteservice(url: string, token: boolean = false, httpOptions: any) {
    return this.httpClient.delete(this.baseUrl + url, token && httpOptions)
  }

  putservice(url: string, data: any, token: boolean = false, httpOptions: any) {
    console.log(data)
    return this.httpClient.put(this.baseUrl + url, data, token && httpOptions)
  }

}
