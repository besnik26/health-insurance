import { LangChangeEvent } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { GlobalFormComponent } from '../global-form/global-form.component';
import { RouterLink } from '@angular/router';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { TestimonialComponent } from '../share/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GlobalFormComponent, RouterLink, GlobalHeaderComponent, TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
selectedLanguage:string = 'en';

  constructor(private translateService: TranslateService){
    this.selectedLanguage = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event:LangChangeEvent)=>{
      this.selectedLanguage =event.lang;
    })
  
  }


  scrollToTop() {
    if (this.isBrowser()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

 
  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
