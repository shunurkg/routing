import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
// import { AvailprdtComponent } from './availprdt/availprdt.component';
import { CustomerratingComponent } from './customerrating/customerrating.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerlistComponent,CustomerratingComponent]
})
export class CustomersModule { }
