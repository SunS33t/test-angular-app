import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import{HttpClientModule} from '@angular/common/http'
import { WeightPipe } from './weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WeightPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
