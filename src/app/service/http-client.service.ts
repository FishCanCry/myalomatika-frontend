import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getNumbers() {
    console.log("test call");
    return this.httpClient.get<number[]>('http://localhost:8080/getNumbers');    
  }
}
