import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';
import { InsuranceContentComponent } from '../share/insurance-content/insurance-content.component';

@Component({
  selector: 'app-car-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent, InsuranceContentComponent],
  templateUrl: './car-insurance.component.html',
  styleUrl: './car-insurance.component.scss'
})
export class CarInsuranceComponent {
  firstDesc = "Accidents happen, but with our car insurance, you can drive with confidence knowing that you're protected. Our policies cover everything from minor fender benders to major collisions, ensuring that your vehicle is repaired and you're back on the road in no time. We offer flexible coverage options to meet your needs and budget, so you can enjoy peace of mind behind the wheel.";
  secondDesc = "Your car is more than just a mode of transportation; it's an essential part of your daily life. Our comprehensive car insurance plans provide extensive coverage, including protection against theft, vandalism, and natural disasters. We also offer additional benefits like roadside assistance and rental car coverage, so you're never left stranded in an emergency.";
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
