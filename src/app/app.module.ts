import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import{HttpClientModule} from '@angular/common/http'
import { WeightPipe } from './weight.pipe';
import { CounterComponent } from './counter/counter.component';
import { BasketComponent } from './basket/basket.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { MainPageComponent } from './main-page/main-page.component';


import {Routes, RouterModule} from '@angular/router';
import { FormComponent } from './form/form.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderComponent } from './order/order.component';


const appRoutes:Routes = [
  {path:'', component:MainPageComponent},
  {path:'order',component: OrderPageComponent},
  {path:'allOrders',component: AllOrdersComponent},
  {path:'allOrders/:id',component: OrderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WeightPipe,
    CounterComponent,
    BasketComponent,
    SearchbarComponent,
    CheckboxFilterComponent,
    OrderPageComponent,
    MainPageComponent,
    FormComponent,
    AllOrdersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
