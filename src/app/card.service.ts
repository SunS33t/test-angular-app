import { Injectable } from '@angular/core';
import { Card } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  public getCards():Card[]{
    let cards:Card[] = [
      {title:'Том ям',text:'ананасы, креветки, моцарелла, соус том ям слабоострый, томаты, чернила каракатицы, шампиньоны',picLink:'https://pizzaricca.ru/items/_47.png'},
      {title:'Малевич',text:'ананасы, белый соус, ветчина, моцарелла, сладкий чили, тигровые креветки, чернила каракатицы',picLink:'https://pizzaricca.ru/items/_34.png'},
      {title:'Гавайская',text:'ананасы, белый соус, курица в соусе терияки, маслины, моцарелла, орегано',picLink:'https://pizzaricca.ru/items/_1.png'},
      {title:'Блэк Бургер',text:'базилик, говяжий фарш, лук, маринованные огурцы, моцарелла, салями с/к, слабоострый соус гриль, томаты, чеддер, чернила каракатицы',picLink:'https://pizzaricca.ru/items/_51.png'}];
    return cards ;
  }
}
