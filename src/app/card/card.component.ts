import { Component, Input, OnInit } from '@angular/core';
import{Pizza} from '../../models';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

@Input() pizza: Pizza;

  constructor(private svc:BasketService) { }

  ngOnInit(): void {
  
  }
  addToBasket(num:number):void {
      this.svc.setPizzaCount(this.pizza,num);
  }
}
