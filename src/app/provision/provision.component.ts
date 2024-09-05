import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { GlobalAccordionComponent } from '../share/global-accordion/global-accordion.component';
import { InsuranceContentComponent } from '../share/insurance-content/insurance-content.component';
import { GlobalFormComponent } from '../global-form/global-form.component';

@Component({
  selector: 'app-provision',
  standalone: true,
  imports: [GlobalHeaderComponent, GlobalAccordionComponent, InsuranceContentComponent, GlobalFormComponent],
  templateUrl: './provision.component.html',
  styleUrl: './provision.component.scss'
})
export class ProvisionComponent {
  firstDesc = "Planning for the future is essential, and our provision insurance plans are here to help you build a secure financial foundation. Whether you're saving for retirement, education, or other long-term goals, our tailored solutions provide the flexibility and growth potential you need. Let us help you prepare for tomorrow, today."
  secondDesc = "Your future deserves careful planning, and our provision insurance is designed to help you achieve your financial objectives. With options that include retirement savings, life insurance, and investment plans, we offer the tools you need to create a robust financial strategy. Start planning for a brighter future with our expert guidance and comprehensive provision plans."
  accordionData = [
    {
      title: 'What does your provision insurance cover?', 
      content: 'Our provision insurance covers a variety of long-term financial needs, including retirement planning, savings, and investment options.' 
    },
    {
      title: 'How do I choose the right provision plan?', 
      content: 'Our financial advisors can help you choose the right plan based on your long-term goals and current financial situation.' 
    },
    {
      title: 'Can I adjust my plan as my needs change?', 
      content: 'Yes, our provision plans are flexible, allowing you to make adjustments as your financial situation and goals evolve.' 
    },
    {
      title: 'What are the tax benefits of provision insurance?', 
      content: 'Many provision plans offer tax benefits, such as tax-deferred growth on investments and potential deductions. Consult with our advisors for specifics.' 
    },
    {
      title: 'How do I access my funds when I need them?', 
      content: 'Accessing your funds is easy. You can withdraw funds according to the terms of your plan, either through regular payments or lump sums.' 
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
