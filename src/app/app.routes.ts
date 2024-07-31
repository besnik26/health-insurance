import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
export const routes: Routes = [

    { path: '', redirectTo: 'en/home', pathMatch: 'full' },
    {
    path: ':lang',
        children: [

            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'car-insurance', component:CarInsuranceComponent},
            { path: '**', component: NotFoundComponent },
            
        ]
    }
];
