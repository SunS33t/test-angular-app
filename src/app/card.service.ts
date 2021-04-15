import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Pizza } from 'src/models';
import { HttpClient } from '@angular/common/http'
import { delay, filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  nameFilter ='';
  descriptionFilter: string[] = [];

  constructor(private http: HttpClient) { }

  public getPizzas():Observable<Pizza[]>{

      return this.descriptionFilter.length!=0? this.http.get<Pizza[]>('assets/pizzas.json').pipe(
        delay(200),
        map((pizzas) => pizzas.filter(pizza => pizza.title.toLowerCase().includes(this.nameFilter.toLowerCase()))),
        map((pizzas) => pizzas.filter(pizza => pizza.tags.some((item) => this.descriptionFilter.indexOf(item)>=0))))
        : 
        this.http.get<Pizza[]>('assets/pizzas.json').pipe(
        delay(200),
        map((pizzas) => pizzas.filter(pizza => pizza.title.toLowerCase().includes(this.nameFilter.toLowerCase()))));
  }
}
