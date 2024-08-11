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
import {MatSliderModule} from '@angular/material/slider';

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
    MatSliderModule
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
      investmentPerMonth:['0',Validators.required]
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
      franchise:['0',Validators.required]
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

  getDataLegal(){
    const formData = this.myForm.value;
    const legalData = this.legalFormGroup.value;
    return new FormModel({
      fullName: formData.fullName,
      email: formData.email,
      mobile: this.phoneInputComponent.getFullNumber(),
      insuranceType: formData.insuranceType,
      terms: formData.terms,
      legalIndividualOrFamily: legalData.individualOrFamily,
      legalCoverage:legalData.coverage
    });
  }

  getDataHealth(){
    const formData = this.myForm.value;
    const healthData = this.healthFormGroup.value;
    return new FormModel({
      fullName: formData.fullName,
      email: formData.email,
      mobile: this.phoneInputComponent.getFullNumber(),
      insuranceType: formData.insuranceType,
      terms: formData.terms,
      healthInsurance: healthData.insurance,
      healthFranchise: healthData.franchise
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
      this.provisionFormGroup.get('reason')?.reset();
      this.provisionFormGroup.get('investmentPerMonth')?.setValue('0');
      this.healthFormGroup.get('insurance')?.reset();
      this.healthFormGroup.get('franchise')?.setValue('0');
      this.legalFormGroup.reset();
    } else if (selectedType === 'provision') {
      this.carFormGroup.reset();
      this.healthFormGroup.get('insurance')?.reset();
      this.healthFormGroup.get('franchise')?.setValue('0');
      this.legalFormGroup.reset();
    } else if (selectedType === 'legal') {
      this.carFormGroup.reset();
      this.healthFormGroup.get('insurance')?.reset();
      this.healthFormGroup.get('franchise')?.setValue('0');
      this.provisionFormGroup.get('reason')?.reset();
      this.provisionFormGroup.get('investmentPerMonth')?.setValue('0');
    } else if (selectedType === 'health') {
      this.carFormGroup.reset();
      this.legalFormGroup.reset();
      this.provisionFormGroup.get('reason')?.reset();
      this.provisionFormGroup.get('investmentPerMonth')?.setValue('0');
    }
  }

  onSubmit(){
    if(this.myForm.valid  && this.phoneInputComponent?.phone.valid){
      if(this.myForm.get('insuranceType')?.value === 'car'){
        const modelData = this.getDataCar();    
        console.log(this.cleanObject(modelData));
      } else if(this.myForm.get('insuranceType')?.value === 'provision'){
        const modelData = this.getDataProvision();    
        console.log(this.cleanObject(modelData));
      } else if(this.myForm.get('insuranceType')?.value === 'legal'){
        const modelData = this.getDataLegal();    
        console.log(this.cleanObject(modelData));
      } else if(this.myForm.get('insuranceType')?.value === 'health'){
        const modelData = this.getDataHealth();    
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

  insurances = [
    {value: 'insurance-1', viewValue: 'Insurance-1'},
    {value: 'insurance-2', viewValue: 'Insurance-2'},
    {value: 'insurance-3', viewValue: 'Insurance-3'},
  ];

  reasons = [
    {value: 'reason-1', viewValue: 'Reason-1'},
    {value: 'reason-2', viewValue: 'Reason-2'},
    {value: 'reason-3', viewValue: 'Reason-3'},
  ];

  coverages = [
    {value: 'coverage-1', viewValue: 'Coverage-1'},
    {value: 'coverage-2', viewValue: 'Coverage-2'},
    {value: 'coverage-3', viewValue: 'Coverage-3'},
  ];



}
