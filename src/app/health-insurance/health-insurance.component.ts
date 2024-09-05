import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';
import { InsuranceContentComponent } from '../share/insurance-content/insurance-content.component';
import { GlobalFormComponent } from '../global-form/global-form.component';

@Component({
  selector: 'app-health-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent, InsuranceContentComponent, GlobalFormComponent],
  templateUrl: './health-insurance.component.html',
  styleUrl: './health-insurance.component.scss'
})
export class HealthInsuranceComponent {
  firstDesc = "Our health insurance plans are designed to provide you and your loved ones with comprehensive protection. From routine check-ups to emergency treatments, we ensure that you have access to the best healthcare services without the burden of overwhelming medical bills. With our extensive network of healthcare providers, you can choose the right care for every stage of life.";
  secondDesc = "When it comes to your health, nothing is more important than peace of mind. Our health insurance plans offer coverage for a wide range of medical needs, including preventive care, chronic condition management, and specialist consultations. Whether you're planning for the unexpected or managing ongoing health concerns, our plans are tailored to keep you and your family healthy and secure.";
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

  scrollToSection() {
    const section = document.getElementById('targetForm');
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - 120, 
        behavior: 'smooth'
      });
    }
  }
}
