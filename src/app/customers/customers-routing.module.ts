import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerratingComponent } from './customerrating/customerrating.component';

export const routes: Routes = [
  {
    path:'',
    component: CustomerlistComponent,
  children:[
    { path:'',
    component: CustomerlistComponent,

    },
  {
    path:'rating',
    component:CustomerratingComponent
  }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
