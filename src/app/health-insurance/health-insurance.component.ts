import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';

@Component({
  selector: 'app-health-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent],
  templateUrl: './health-insurance.component.html',
  styleUrl: './health-insurance.component.scss'
})
export class HealthInsuranceComponent {

}
