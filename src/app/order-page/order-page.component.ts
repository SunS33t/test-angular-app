import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models/pizza';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  map:Map<Pizza,number> = new Map<Pizza,number>()
  constructor(private svc: BasketService) {
  }

  ngOnInit(): void {
    this.map = this.svc.map;
  }

  clearBask(){
    this.svc.clearBasket();
  }
  

}
