import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';

@Component({
  selector: 'app-health-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent],
  templateUrl: './health-insurance.component.html',
  styleUrl: './health-insurance.component.scss'
})
export class HealthInsuranceComponent {
  accordionData = [
    { title: 'Taiga UI cdk', content: 'Development kit consisting of low level tools...' },
    { title: 'Taiga UI Kit', content: 'Component library for Angular with customizable features...' }
  ];
}
