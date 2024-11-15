import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'home', 
    }
];
