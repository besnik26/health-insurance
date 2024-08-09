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
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-global-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgStyle,
    RouterLink,
    PhoneNumberInputComponent,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
  ],
  templateUrl: './global-form.component.html',
  styleUrl: './global-form.component.scss'
})
export class GlobalFormComponent implements OnInit, AfterViewInit{

  myForm!:FormGroup;
  carFormGroup!:FormGroup;
  provisionFormGroup!:FormGroup;
  legalFormGroup!:FormGroup;
  healthFormGroup!:FormGroup;

  @ViewChild(PhoneNumberInputComponent) phoneInputComponent!: PhoneNumberInputComponent;
  constructor(private formBuilder: FormBuilder,){
    this.buildForm();
    this.buildCarForm();
    this.buildProvisionForm();
    this.buildLegalForm();
    this.buildHealthForm();
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
  private buildProvisionForm(){
    this.provisionFormGroup = this.formBuilder.group({
      reason:['',Validators.required],
      investmentPerMonth:['',Validators.required]
    })
  }
  private buildLegalForm(){
    this.legalFormGroup = this.formBuilder.group({
      individualOrFamily:['',Validators.required],
      coverage:['',Validators.required]
    })
  }

  private buildHealthForm(){
    this.healthFormGroup = this.formBuilder.group({
      insurance:['',Validators.required],
      franchise:['',Validators.required]
    })
  }


  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
    this.myForm.get('insuranceType')?.valueChanges.subscribe((selectedType) => {
      this.handleInsuranceTypeChange(selectedType);
    });
    
  }
  getDataCar(){
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

  getDataProvision(){
    const formData = this.myForm.value;
    const provisionData = this.provisionFormGroup.value;
    return new FormModel({
      fullName: formData.fullName,
      email: formData.email,
      mobile: this.phoneInputComponent.getFullNumber(),
      insuranceType: formData.insuranceType,
      terms: formData.terms,
      provisionReason: provisionData.reason,
      provisionInvestmentPerMonth: provisionData.investmentPerMonth
    });
  }

  private cleanObject(obj: { [key: string]: any }): { [key: string]: any } {
    return Object.keys(obj).reduce((acc, key) => {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }
      return acc;
    }, {} as { [key: string]: any });
  }


  private handleInsuranceTypeChange(selectedType: string): void {
    if (selectedType === 'car') {
      this.provisionFormGroup.reset();
    } else if (selectedType === 'provision') {
      this.carFormGroup.reset();
    }
  }

  onSubmit(){
    if(this.myForm.valid  && this.phoneInputComponent?.phone.valid){
      if(this.myForm.get('insuranceType')?.value === 'car'){
        const modelData = this.getDataCar();    
        console.log(this.cleanObject(modelData));
      }
      else if(this.myForm.get('insuranceType')?.value === 'provision'){
        const modelData = this.getDataProvision();    
        console.log(this.cleanObject(modelData));
      }
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

  foods = [
    {value: 'insurance-1', viewValue: 'Insurance-1'},
    {value: 'insurance-2', viewValue: 'Insurance-2'},
    {value: 'insurance-3', viewValue: 'Insurance-3'},
  ];

}
