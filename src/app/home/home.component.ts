import { LangChangeEvent } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
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
selectedLanguage:string = 'en';

  constructor(private translateService: TranslateService){
    this.selectedLanguage = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event:LangChangeEvent)=>{
      this.selectedLanguage =event.lang;
    })
  
  }
}
