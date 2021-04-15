import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardService } from '../card.service';



@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {

  @Output() filterSetEvent = new EventEmitter();

  tags =  [ {desc:'Без мяса', val:'no-meat' ,check: false},
            {desc:'Острая',val:'spicy' ,check: false},
            {desc: 'Морепродукты',val:'seafood',check:false}];

  constructor(private svc:CardService) { }

  
  ngOnInit(): void {

  }

  onCheckChange(tag){
    tag.check = !tag.check;
    let filter:string[] = [];
    this.tags.forEach(element => {
      element.check && filter.push(element.desc) 
    });
    this.svc.descriptionFilter = filter;
    this.filterSetEvent.emit();
  }
}
