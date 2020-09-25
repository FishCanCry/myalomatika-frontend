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
    return this.httpClient.get<number[]>('http://myalomatika-numbers-generator-service-svc/getNumbers?level=1&digit=2&count=10&combo=true');    
  }
}
