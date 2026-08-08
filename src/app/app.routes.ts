import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'en/home', pathMatch: 'full' },
    {
        path: ':lang',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'car-insurance',
                loadComponent: () => import('./car-insurance/car-insurance.component').then((m) => m.CarInsuranceComponent),
            },
            {
                path: 'provision',
                loadComponent: () => import('./provision/provision.component').then((m) => m.ProvisionComponent),
            },
            {
                path: 'legal-insurance',
                loadComponent: () => import('./legal-insurance/legal-insurance.component').then((m) => m.LegalInsuranceComponent),
            },
            {
                path: 'health-insurance',
                loadComponent: () => import('./health-insurance/health-insurance.component').then((m) => m.HealthInsuranceComponent),
            },
            {
                path: 'company-insurance',
                loadComponent: () => import('./company-insurance/company-insurance.component').then((m) => m.CompanyInsuranceComponent),
            },
            {
                path: 'pet-insurance',
                loadComponent: () => import('./pet-insurance/pet-insurance.component').then((m) => m.PetInsuranceComponent),
            },
            {
                path: 'contact',
                loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
            },
            {
                path: 'blogs',
                loadComponent: () => import('./blog/blog.component').then((m) => m.BlogComponent),
            },
            {
                path: 'blogs/:id',
                loadComponent: () => import('./blog/blog-details/blog-details.component').then((m) => m.BlogDetailsComponent),
            },
            {
                path: '**',
                loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
            },
        ],
    },
];

