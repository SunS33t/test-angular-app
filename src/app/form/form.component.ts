import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
 
  constructor(private fb: FormBuilder) { }

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Zа-яА-я]*')]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Zа-яА-я]*')]),
    phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11),Validators.pattern('[0-9]*')]),
    adress: new FormControl('',[Validators.required])
  });


  get firstName() { return this.profileForm.get('firstName'); }
  get lastName(){return this.profileForm.get('lastName')}
  get phoneNumber(){return this.profileForm.get('phoneNumber');}
  get adress(){return this.profileForm.get('adress')}
  

  onSubmit() {

    console.log(this.profileForm.value);
  }
}

