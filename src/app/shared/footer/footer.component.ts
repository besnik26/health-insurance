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
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  subscribeForm!: FormGroup;
  selectedLanguage: string = "en";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.buildForm();
    this.selectedLanguage = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event:LangChangeEvent)=>{
      this.selectedLanguage =event.lang;
    })
  }

  ngOnInit() {
    
  }

  private buildForm() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    });
  }

  onSend() {
    if (this.subscribeForm.valid) {
      setTimeout(() => this.resetForm(), 2500)
    } else {
      this.markFormGroupTouched(this.subscribeForm);
    }
  }

  markFormGroupTouched(formGroup:FormGroup){
    Object.values(formGroup.controls).forEach(control =>{
      control.markAsTouched();
    })
  }

  resetForm(){
    this.subscribeForm.reset();
  }

  
}
