import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  map:Map<Pizza,number>;
  constructor(private svc:BasketService) { }
  

  ngOnInit(): void {
    this.map = this.svc.map;
    this.svc.changeBasketEvent.subscribe(map => this.map = map)
  }
  
  
  getTotal():number{
    let res = 0;
    if(this.map!=null)
    this.map.forEach((count,key)=>res+=count*key.cost);
    return res;
  }
  
  clearBasket(){
    this.svc.clearBasket();
  }

}
