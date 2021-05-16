import { Component, OnInit } from '@angular/core';
import { Order, Status } from 'src/models';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  orderList:Order[];
  constructor(private svc:OrderService) { }

  ngOnInit(): void {
    this.orderList = this.svc.orderList;
    
  }


}
