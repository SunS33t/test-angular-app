import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  
  @Output() countChangeEvent = new EventEmitter<number>();

  count:number = 0;

  constructor(private svc:BasketService) { }

  ngOnInit(): void {
    this.svc.clearBasketEvent.subscribe(()=>this.clearCount())
  }

  add():void{
    this.count++;
  }

  remove():void{
    if(this.count != 0)
    this.count--;
  }

  clearCount(){
    this.count = 0;
  }

}
