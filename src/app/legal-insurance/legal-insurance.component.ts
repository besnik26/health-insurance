import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';

@Component({
  selector: 'app-legal-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent],
  templateUrl: './legal-insurance.component.html',
  styleUrl: './legal-insurance.component.scss'
})
export class LegalInsuranceComponent {
  accordionData = [
    {
      title: 'What legal matters are covered under your insurance?', 
      content: 'Our legal insurance covers a broad spectrum of legal issues, including family law, property disputes, employment issues, and more.' 
    },
    {
      title: 'Can I choose my own lawyer?', 
      content: 'Yes, you can choose from our network of qualified lawyers, or we can recommend one based on your specific needs.' 
    },
    {
      title: 'Is there a deductible for legal insurance?', 
      content: 'Some plans may have a deductible, while others may not. It depends on the specific policy you choose.' 
    },
    {
      title: 'How do I file a claim for legal insurance?', 
      content: 'Filing a legal insurance claim is straightforward. Contact our claims department, and we’ll assist you every step of the way.' 
    },
    {
      title: 'Are court costs covered?', 
      content: 'Yes, many of our legal insurance plans cover court costs, attorney fees, and other related expenses.' 
    },
  ];
}
