import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardService } from '../card.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Output() searchRequestEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {

  }

  search(a){
     this.searchRequestEvent.emit(a);
  }

}
