import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';
import { InsuranceContentComponent } from '../share/insurance-content/insurance-content.component';
import { GlobalFormComponent } from '../global-form/global-form.component';

@Component({
  selector: 'app-legal-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent,InsuranceContentComponent, GlobalFormComponent],
  templateUrl: './legal-insurance.component.html',
  styleUrl: './legal-insurance.component.scss'
})
export class LegalInsuranceComponent {
  firstDesc = "Navigating legal challenges can be overwhelming, but with our legal insurance, you're never alone. Our plans offer access to expert legal advice and representation for a variety of issues, including family law, employment disputes, and property matters. With our support, you can face any legal situation with confidence, knowing that your rights are protected."
  secondDesc = "Legal matters can be costly and complicated, but our legal insurance makes it easier and more affordable to get the help you need. Whether you're dealing with a personal dispute or a complex legal issue, our insurance plans provide you with the coverage necessary to secure professional legal assistance. Protect yourself and your family with our comprehensive legal insurance solutions."
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
