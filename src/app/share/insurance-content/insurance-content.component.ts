import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-content',
  standalone: true,
  imports: [],
  templateUrl: './insurance-content.component.html',
  styleUrl: './insurance-content.component.scss'
})
export class InsuranceContentComponent {
  @Input() firstTitle:string = '';
  @Input() firstDescription:string = '';
  @Input() firstImage:string = '';
  @Input() secondTitle:string = '';
  @Input() secondDescription:string = '';
  @Input() secondImage:string = '';
}
