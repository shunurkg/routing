import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule, routes } from './customers-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
// import { AvailprdtComponent } from './availprdt/availprdt.component';
import { CustomerratingComponent } from './customerrating/customerrating.component';
import { RouterModule ,Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
  // RouterModule.forChild(routes)
  ],
  declarations: [CustomerlistComponent,CustomerratingComponent]
})
export class CustomersModule { }
