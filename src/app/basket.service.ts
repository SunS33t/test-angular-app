import { EventEmitter, Injectable, Output } from '@angular/core';

import { Pizza } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  map:Map<Pizza,number> = new Map<Pizza,number>()
  @Output() changeBasketEvent = new EventEmitter();
  @Output() clearBasketEvent = new EventEmitter();

  constructor() { }

  setPizzaCount(pizza:Pizza,count:number):void{
    this.map.set(pizza,count);
    if(this.map.get(pizza)===0)
        this.map.delete(pizza);
    this.changeBasketEvent.emit(this.map);
  }

  clearBasket(){
    this.map.clear();
    this.changeBasketEvent.emit(this.map);
    this.clearBasketEvent.emit();
  }
}
