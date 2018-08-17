import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AvailableprdtComponent } from './availableprdt/availableprdt.component';

const routes: Routes = [
  {
    path:'',
    component:OrderlistComponent
  },
  {
    path:'availpdct',
    component:AvailableprdtComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
