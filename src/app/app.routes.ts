import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'en/home', pathMatch: 'full' },
    {
        path: ':lang',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'car-insurance',
                loadComponent: () => import('./pages/car-insurance/car-insurance.component').then((m) => m.CarInsuranceComponent),
            },
            {
                path: 'provision',
                loadComponent: () => import('./pages/provision/provision.component').then((m) => m.ProvisionComponent),
            },
            {
                path: 'legal-insurance',
                loadComponent: () => import('./pages/legal-insurance/legal-insurance.component').then((m) => m.LegalInsuranceComponent),
            },
            {
                path: 'health-insurance',
                loadComponent: () => import('./pages/health-insurance/health-insurance.component').then((m) => m.HealthInsuranceComponent),
            },
            {
                path: 'company-insurance',
                loadComponent: () => import('./pages/company-insurance/company-insurance.component').then((m) => m.CompanyInsuranceComponent),
            },
            {
                path: 'pet-insurance',
                loadComponent: () => import('./pages/pet-insurance/pet-insurance.component').then((m) => m.PetInsuranceComponent),
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
            },
            {
                path: 'blogs',
                loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
            },
            {
                path: 'blogs/:id',
                loadComponent: () => import('./pages/blog/blog-details/blog-details.component').then((m) => m.BlogDetailsComponent),
            },
            {
                path: '**',
                loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
            },
        ],
    },
];

