import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.less']
})
export class NumbersComponent implements OnInit {

  numbers:number[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getNumbers().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }
  
  handleSuccessfulResponse(response: number[]) {
    this.numbers=response;
  }

}
