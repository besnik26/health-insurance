import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() scrollToSection: EventEmitter<void> = new EventEmitter();


  onScrollToSection() {
    this.scrollToSection.emit();
  }
}
