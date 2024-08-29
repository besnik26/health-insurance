import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';
import { InsuranceContentComponent } from '../share/insurance-content/insurance-content.component';

@Component({
  selector: 'app-pet-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent, InsuranceContentComponent],
  templateUrl: './pet-insurance.component.html',
  styleUrl: './pet-insurance.component.scss'
})
export class PetInsuranceComponent {
  firstDesc = "Your pet is a cherished member of your family, and their health and well-being are just as important as your own. Our pet insurance provides coverage for accidents, illnesses, and routine care, so you can ensure your furry friend receives the best possible treatment. From unexpected emergencies to regular check-ups, we've got you covered.";
  secondDesc = "Veterinary care can be expensive, but with our pet insurance, you can focus on your pet's health without worrying about the cost. Our plans offer affordable premiums and extensive coverage, including surgeries, medications, and preventative care. Keep your pet healthy and happy with our reliable pet insurance solutions.";
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
