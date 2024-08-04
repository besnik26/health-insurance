import { NgClass, NgStyle } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { RouterLink } from '@angular/router';
import { PhoneNumberInputComponent } from '../share/phone-number-input/phone-number-input.component';
import { FormModel } from '../models/form.model';
@Component({
  selector: 'app-global-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgStyle,
    RouterLink,
    PhoneNumberInputComponent
  ],
  templateUrl: './global-form.component.html',
  styleUrl: './global-form.component.scss'
})
export class GlobalFormComponent implements OnInit, AfterViewInit{

  myForm!:FormGroup;
  carFormGroup!:FormGroup;
  @ViewChild(PhoneNumberInputComponent) phoneInputComponent!: PhoneNumberInputComponent;
  constructor(private formBuilder: FormBuilder,){
    this.buildForm();
    this.buildCarForm();
  }


  private buildForm(){
    const emailPattern = /^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$/;
    this.myForm = this.formBuilder.group({
      insuranceType:['',Validators.required],
      fullName:['', Validators.required],
      email:['', [Validators.required, Validators.email, Validators.pattern(emailPattern)]],
      phone:['',Validators.required],
      terms:['',Validators.requiredTrue], 
     
    })
  }
  private buildCarForm(){
    this.carFormGroup = this.formBuilder.group({
      carBrand:['',Validators.required],
      marketPlacing:['',Validators.required]
    })
  }


  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }
  getData(){
    const formData = this.myForm.value;
    const carData = this.carFormGroup.value;
    return new FormModel({
      fullName: formData.fullName,
      email: formData.email,
      mobile: this.phoneInputComponent.getFullNumber(),
      insuranceType: formData.insuranceType,
      terms: formData.terms,
      carBrand:carData.carBrand,
      carPlacing:carData.marketPlacing
    });
  }


  onSubmit(){
    if(this.myForm.valid  && this.phoneInputComponent?.phone.valid){
      const modelData = this.getData();    
      console.log(modelData);
      
    }
    else{
      this.markFormGroupTouched(this.myForm);
    }
  }

  markFormGroupTouched(formGroup:FormGroup){
    Object.values(formGroup.controls).forEach(control =>{
      control.markAsTouched();
      this.phoneInputComponent.phone.markAsTouched();
    })
  }

}
