import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() imgSrc:string = '';
}
