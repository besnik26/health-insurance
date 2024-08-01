import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';

@Component({
  selector: 'app-pet-insurance',
  standalone: true,
  imports: [GlobalHeaderComponent],
  templateUrl: './pet-insurance.component.html',
  styleUrl: './pet-insurance.component.scss'
})
export class PetInsuranceComponent {

}
