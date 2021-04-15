import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pizza } from 'src/models';
import { CardService } from '../card.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  public pizzas:Observable<Pizza[]>;

  constructor(private cardService: CardService, public router: Router){
    
  }

  ngOnInit(): void {
    this.getCards();
  }

  public getCards():void{
      this.pizzas = this.cardService.getPizzas()
  }
}
