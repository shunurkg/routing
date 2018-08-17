import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerratingComponent } from './customers/customerrating/customerrating.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import {CustomersModule} from './customers/customers.module';
import {OrdersModule} from './orders/orders.module';



// export const routes: Routes = [
//     {
//         path:'',
//         component:HomeComponent
//     },
//     {
//         path:'aboutme',
//         component:AboutmeComponent
//     },
//     {
//         path:'contact',
//         component:ContactComponent
//     }
    
// ]
export const route: Routes = [
    {
      path: 'customers',
      loadChildren:'./customers/customers.module#CustomersModule'
    },
    {
      path: 'orders',
      loadChildren: './orders/orders.module#OrdersModule'
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ];