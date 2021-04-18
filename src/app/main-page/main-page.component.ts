import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Pizza } from 'src/models';
import { CardService } from '../card.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public pizzas: Observable<Pizza[]>;
  public filteredPizzas: Observable<Pizza[]>;
  private mask ="";
  private checks = [];

  constructor(private cardService: CardService, public router: Router) {

  }

  setFilters(mask) {
    this.mask = mask.toLowerCase();
    this.getFiltered();
  }

  setChecks(checks) {
    this.checks = checks;
    this.getFiltered();
  }

  private getFiltered(): void{
    if (this.checks.length != 0)
        this.filteredPizzas = this.pizzas.pipe(map(proj => proj.filter(x => x.title.toLowerCase().includes(this.mask) && x.tags.some(el => this.checks.includes(el)) 
        )));
    else
        this.filteredPizzas = this.pizzas.pipe(map(proj=> proj.filter(x=> x.title.toLowerCase().includes(this.mask))));
  }

  ngOnInit(): void {
    this.getCards();
    this.filteredPizzas = this.pizzas;
  }

  public getCards(): void {
    this.pizzas = this.cardService.getPizzas();
  }
}
