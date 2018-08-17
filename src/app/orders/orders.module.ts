import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AvailableprdtComponent } from './availableprdt/availableprdt.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderlistComponent, AvailableprdtComponent]
})
export class OrdersModule { }
