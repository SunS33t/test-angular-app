import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private cardService: CardService, public router: Router){
    
  }

  ngOnInit(): void {
  }
  
}
