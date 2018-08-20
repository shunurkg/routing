import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
//import { routes } from './app.routes';
import{route} from './app.routes';
import { CustomersModule } from './customers/customers.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    // OrdersModule,
    
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }