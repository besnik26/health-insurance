import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';

@Component({
  selector: 'app-company-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent],
  templateUrl: './company-insurance.component.html',
  styleUrl: './company-insurance.component.scss'
})
export class CompanyInsuranceComponent {
  accordionData = [
    {
      title: 'What types of coverage are included in your company insurance?', 
      content: 'Our company insurance includes property coverage, liability protection, business interruption insurance, and employee benefits.' 
    },
    {
      title: 'How do I customize a policy for my business?', 
      content: 'We offer customizable options to suit your business needs. Our experts will work with you to create a plan that covers all your specific risks.' 
    },
    {
      title: 'Are there discounts for multiple policies?', 
      content: 'Yes, we offer multi-policy discounts, which can save your business money when you combine different types of coverage.' 
    },
    {
      title: 'How do I file a claim if something happens to my business?', 
      content: 'Reporting a claim is easy. Contact our claims department, and we’ll help you get your business back on track quickly.' 
    },
    {
      title: 'Does your company insurance cover remote employees?', 
      content: 'Yes, our company insurance can include coverage for remote employees, ensuring they are protected no matter where they work.' 
    },
  ];
}
