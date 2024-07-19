import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-global-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgStyle,
    RouterLink
  ],
  templateUrl: './global-form.component.html',
  styleUrl: './global-form.component.scss'
})
export class GlobalFormComponent {

  myForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,){
    this.buildForm();
  }


  private buildForm(){
    const emailPattern = /^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$/;
    this.myForm = this.formBuilder.group({
      insuranceType:['',Validators.required]
    })
  }

}
