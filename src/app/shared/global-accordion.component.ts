import { Component, Input } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/kit';

@Component({
  selector: 'app-global-accordion',
  standalone: true,
  imports: [TuiAccordion],
  templateUrl: './global-accordion.component.html',
  styleUrl: './global-accordion.component.scss'
})
export class GlobalAccordionComponent {
  @Input() dataArray: Array<{ title: string, content: string }> = [];

}
