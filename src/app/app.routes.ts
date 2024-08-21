import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { ProvisionComponent } from './provision/provision.component';
import { LegalInsuranceComponent } from './legal-insurance/legal-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { CompanyInsuranceComponent } from './company-insurance/company-insurance.component';
import { PetInsuranceComponent } from './pet-insurance/pet-insurance.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
export const routes: Routes = [

    { path: '', redirectTo: 'en/home', pathMatch: 'full' },
    {
    path: ':lang',
        children: [

            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'car-insurance', component:CarInsuranceComponent},
            { path: 'provision', component: ProvisionComponent },
            { path: 'legal-insurance', component: LegalInsuranceComponent },
            { path: 'health-insurance', component: HealthInsuranceComponent },
            { path: 'company-insurance', component: CompanyInsuranceComponent },
            { path: 'pet-insurance', component: PetInsuranceComponent },
            { path: 'contact', component:ContactComponent},
            { path: 'blogs', component:BlogComponent},
            { path: 'blogs/:id', component:BlogDetailsComponent},
            { path: '**', component: NotFoundComponent },
            
        ]
    }
];
