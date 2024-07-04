import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import { filter } from 'rxjs';
import {LangChangeEvent, TranslateModule, TranslateService} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  subscribeFormSubmitted = false;
  isSubmitting = false;
  subSubmitted: boolean = false;
  subscribeForm!: FormGroup;
  selectedLanguage: string = "";



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.buildForm();
    this.selectedLanguage = this.translateService.currentLang;

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLanguage = event.lang;
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.subscribeForm.reset();
      });
  }

  private buildForm() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    });
  }

  onSend() {
    this.isSubmitting = true;
    this.subscribeFormSubmitted = true;

    if (this.subscribeForm.valid) {
      this.subscribeFormSubmitted = false;
      this.subSubmitted = true;
      this.subscribeForm.reset();
      this.isSubmitting = false;
    } else {
      this.isSubmitting = false;
    }
  }
  
}
