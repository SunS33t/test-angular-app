import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import{HttpClientModule} from '@angular/common/http'
import { WeightPipe } from './weight.pipe';
import { CounterComponent } from './counter/counter.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WeightPipe,
    CounterComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
