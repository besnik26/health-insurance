import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';

@Component({
  selector: 'app-pet-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent],
  templateUrl: './pet-insurance.component.html',
  styleUrl: './pet-insurance.component.scss'
})
export class PetInsuranceComponent {
  accordionData = [
    {
      title: 'What does pet insurance cover?', 
      content: 'Our pet insurance covers a range of veterinary expenses, including accidents, illnesses, surgeries, and routine care like vaccinations.' 
    },
    {
      title: 'Can I use my own vet?', 
      content: 'Yes, you can visit any licensed veterinarian, and we’ll cover the costs according to your policy.' 
    },
    {
      title: 'Are pre-existing conditions covered?', 
      content: 'Pre-existing conditions are typically not covered, but we offer comprehensive coverage for new health issues that arise after your policy starts.' 
    },
    {
      title: 'How do I file a claim for pet insurance?', 
      content: "Filing a claim is simple. Submit your vet's invoice online or through our mobile app, and we’ll reimburse you quickly." 
    },
    {
      title: 'What is the waiting period before coverage begins?', 
      content: 'The waiting period depends on the specific policy, but it generally ranges from a few days to a couple of weeks.' 
    },
  ];
}
