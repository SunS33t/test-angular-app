import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterState } from '@angular/router';
import { Order, Pizza } from 'src/models';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() orderMap: Map<Pizza,number>;
  @Output() addOrderEvent = new EventEmitter();
 
  constructor(private fb: FormBuilder,private orderSvc:OrderService) { 
    
  }

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
      let ordMap= new Map<Pizza,number>(this.orderMap);
      this.orderSvc.addOrder(ordMap);
      this.addOrderEvent.emit();  
  }

  
}

