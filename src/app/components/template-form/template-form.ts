import { Component, EventEmitter, inject, NgModule, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {SharedData} from '../shared-data'
@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule
  ],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {
shareData = inject(SharedData);
  userForm:any = {
    email:'',
    password:'',
    address:'',
    address2:'',
    state:'',
    zip:'',
    checkMeOut:false
  }
  constructor(private dataService: SharedData) {}

  // @Output() formSubmitted = new EventEmitter<any>();

  onSave() {
   // console.log('Form Data:', this.userForm);
    this.dataService.SaveData(this.userForm);
  }
}
