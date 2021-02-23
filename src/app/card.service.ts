import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Pizza } from 'src/models';
import{HttpClient} from '@angular/common/http'
import{delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  public getPizzas():Observable<Pizza[]>{
      return this.http.get<Pizza[]>('assets/pizzas.json').pipe(delay(2000));   
  }
}
