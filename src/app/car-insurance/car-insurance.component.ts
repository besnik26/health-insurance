import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';

@Component({
  selector: 'app-car-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent],
  templateUrl: './car-insurance.component.html',
  styleUrl: './car-insurance.component.scss'
})
export class CarInsuranceComponent {
  accordionData = [
    {
      title: 'What types of car insurance do you offer?', 
      content: 'We offer a range of car insurance options, including liability, collision, comprehensive, and personal injury protection. You can choose the coverage that best fits your needs.' 
    },
    {
      title: 'Will my insurance cover rental cars?', 
      content: "Yes, our car insurance policies can include coverage for rental cars, so you're protected even when driving a temporary vehicle." 
    },
    {
      title: "How are premiums determined?", 
      content: "Premiums are based on several factors, including your driving record, the type of vehicle, and the coverage options you choose." 
    },
    {
      title: 'What should I do after an accident?', 
      content: "After an accident, ensure everyone's safety, exchange information, and contact us to report the incident. We’ll guide you through the claims process." 
    },
    {
      title: 'Are there discounts available?', 
      content: 'Yes, we offer various discounts, such as safe driver discounts, multi-policy discounts, and more. Ask our team about how you can save.' 
    },
  ];
}
