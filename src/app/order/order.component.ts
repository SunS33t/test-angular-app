import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/models';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order:Order;
  constructor(private route: ActivatedRoute,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(id)
      .subscribe(order => this.order = order);
  }
}
