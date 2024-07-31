import { Component } from '@angular/core';
import { GlobalFormComponent } from '../global-form/global-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GlobalFormComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
