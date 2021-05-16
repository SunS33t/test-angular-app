import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order, Pizza, Status } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderList:Order[] = [];
  index = 1;
  constructor(public router:Router) { }

  addOrder(orderMap:Map<Pizza,number>){
    let newOrder = {orderId: this.index, content : orderMap, status:Status.Accepted };
    this.orderList.push(newOrder);
    for(let i =1; i <= 3;i++){
      setTimeout(this.setNextState, 60000*i ,newOrder);
    }
    this.router.navigate(['../allOrders/'+this.index++]);

  }

  private setNextState(order:Order){
      switch(order.status){
        case Status.Accepted:
          order.status = Status.Prepare
          break;
        case Status.Prepare:
          order.status = Status.Delivery;
          break;
        case Status.Delivery:
          order.status = Status.Ready;
          break;
      }
  }

  getOrderById(id: number): Observable<Order> {
    const order = this.orderList.find(h => h.orderId === id) as Order;
    return of(order);
  }

}
