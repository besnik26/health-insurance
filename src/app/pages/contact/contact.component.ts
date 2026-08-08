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



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgClass,
    NgStyle,
    RouterLink,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myForm!:FormGroup;
  showThanks:boolean = false;

  constructor(private formBuilder:FormBuilder){
    this.buildForm();
  }

  buildForm(){
    const emailPattern = /^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$/;
    this.myForm = this.formBuilder.group({
      fullName:['', Validators.required],
      email:['', [Validators.required, Validators.email, Validators.pattern(emailPattern)]],
      subject:['',Validators.required],
      message:['',Validators.required]
     
    })
  }

  onSubmit(){
    if(this.myForm.valid){
    console.log(this.myForm.value);
    this.showThanks = true;
    setTimeout(() => this.resetForm(), 2500)
    }
    else{
      this.markFormGroupTouched(this.myForm);
    }
  }

  markFormGroupTouched(formGroup:FormGroup){
    Object.values(formGroup.controls).forEach(control =>{
      control.markAsTouched();
    })
  }

  resetForm(){
    this.showThanks = false;
    this.myForm.reset();
  }
}
