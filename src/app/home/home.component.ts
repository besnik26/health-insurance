import { Component } from '@angular/core';
import { GlobalFormComponent } from '../global-form/global-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GlobalFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
