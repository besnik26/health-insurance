import { Component, forwardRef, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-phone-number-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: './phone-number-input.component.html',
  styleUrl: './phone-number-input.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => PhoneNumberInputComponent),
      multi:true
    }
  ]
})
export class PhoneNumberInputComponent implements AfterViewInit, ControlValueAccessor{
  
  phone: FormControl = new FormControl('', [Validators.required, this.validatePhoneNumber.bind(this)]);
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  iti: any;
  @Input() index!: number;
  @Input() isFormSubmitted: boolean = false;
  @Output() phoneTouched = new EventEmitter<void>();

  ngAfterViewInit() {
    this.initizalizeTelInput()
  }



  initizalizeTelInput() {
    const input = this.phoneInput?.nativeElement;

    const options = {
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js",
      initialCountry: "ch",
      useFullscreenPopup: false,
      showSelectedDialCode: true
    };

    this.iti = intlTelInput(input, options);

    input.addEventListener('countrychange', () => {
      this.phone.updateValueAndValidity();
    });
  }




  preventNonNumericInput(event: KeyboardEvent): void {
    if (!/^\+|[0-9]$/.test(event.key) &&
      event.key !== 'Backspace' &&
      event.key !== 'Tab' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight' &&
      event.key !== 'Delete' &&
      event.key !== 'Enter') {
      event.preventDefault();
    }
  }
  
  validatePhoneNumber(): ValidationErrors | null {
    const isValid = this.iti?.isValidNumberPrecise();
    if (!isValid && this.phone?.value?.length !== 0) {
      return { invalid: true };
    }
    return null;
  }
  
  onPhoneInputTouched() {
    this.phoneTouched.emit();
  }
  
  
  
  writeValue(value: any): void {
    if (this.phone)
      this.phone.setValue(value);
  }
  
  registerOnChange(fn: any): void {
    this.phone.valueChanges.subscribe(fn);
  }
  
  registerOnTouched(fn: any): void {
    this.phone.valueChanges.subscribe(fn);
  }
  
  setDisabledState?(isDisabled: boolean): void {
    if (this.phone)
      isDisabled ? this.phone.disable() : this.phone.enable();
  }
  
  getFullNumber(): string {
    return this.iti.getNumber();
  }
}
