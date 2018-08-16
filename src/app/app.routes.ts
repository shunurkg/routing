import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'aboutme',
        component:AboutmeComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
    
]