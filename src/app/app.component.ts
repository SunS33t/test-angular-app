import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models';
import{CardService} from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-angular-app';

  public cards:Card[];

  constructor(private cardService: CardService){

  }
  ngOnInit(): void {
    this.getCards();
  }

  private getCards():void{
      this.cards = this.cardService.getCards();
  }
  
}
