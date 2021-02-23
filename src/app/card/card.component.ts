import { Component, Input, OnInit } from '@angular/core';
import{Pizza} from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

@Input() pizza: Pizza;

  constructor() { }

  ngOnInit(): void {
  
  }

}
