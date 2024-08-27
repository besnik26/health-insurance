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
    {
      title: 'What does your health insurance cover?', 
      content: 'Our health insurance covers a wide range of medical expenses, including doctor visits, hospital stays, prescription medications, and preventive care.' 
    },
    {
      title: 'Can I choose my own doctor with your health insurance?', 
      content: 'Yes, our health insurance plans allow you to choose from a network of trusted healthcare providers, ensuring you receive the care you need from a doctor you trust.' 
    },
    {
      title: 'Are pre-existing conditions covered?', 
      content: "Yes, our health insurance plans cover pre-existing conditions, so you can rest easy knowing you're protected." 
    },
    {
      title: 'How do I file a claim?', 
      content: ' Filing a claim is simple. You can do it online through our portal or by contacting our customer service team, who will guide you through the process.' 
    },
    {
      title: 'What is the waiting period for coverage to begin?', 
      content: 'Coverage typically begins after a short waiting period, which varies depending on the plan you choose. Our team can provide specific details based on your selection.' 
    },
  ];
}
