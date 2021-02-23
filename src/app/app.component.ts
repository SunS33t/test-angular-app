import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Pizza } from 'src/models';
import{CardService} from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-angular-app';

  public pizzas:Observable<Pizza[]>;

  constructor(private cardService: CardService){
  }

  ngOnInit(): void {
    this.getCards();
  }

  private getCards():void{
      this.pizzas = this.cardService.getPizzas()
  }
  
}
