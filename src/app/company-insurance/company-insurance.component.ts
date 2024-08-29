import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';
import { InsuranceContentComponent } from '../share/insurance-content/insurance-content.component';

@Component({
  selector: 'app-company-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent, InsuranceContentComponent],
  templateUrl: './company-insurance.component.html',
  styleUrl: './company-insurance.component.scss'
})
export class CompanyInsuranceComponent {
  firstDesc = "Running a business comes with its share of risks, but with our company insurance, you can protect your enterprise from unexpected challenges. Our policies cover property damage, liability claims, and business interruptions, ensuring that your operations continue smoothly even in difficult times. Trust us to safeguard your business so you can focus on growth.";
  secondDesc = "Every business is unique, and our company insurance plans are designed to meet the specific needs of your organization. Whether you're a small startup or a large corporation, we offer customizable coverage options that protect your assets, employees, and reputation. Let us provide the security you need to thrive in today's competitive market.";
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
