import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf,FormsModule,NgFor,NgClass],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {
  isActive:boolean = false;
  isVisible:boolean=false;
  num1=0;
  num2=0;
  selectedCode='';

  stdDivClass='bg-success';
  isGood:boolean=false;
  something='';
  checker:string="";
  isRed:boolean=true;

  cityList:string []=['Cumilla', 'Dhaka','Chattogram','Sylhet'];
  students=[
    {Name:'Sk Rakib', Semester:8, Age:25, grade:'A'},
    {Name:'xyz', Semester:4, Age:21, grade:''},
    {Name:'abcd', Semester:5, Age:22, grade:'B'},
    {Name:'dhsmdui', Semester:6, Age:20, grade:'C'}
  ]
  

  show(){
    this.isVisible = true;
  }
  hide(){
    this.isVisible = false;
  }

  show_hide1(obj:boolean){
    this.isActive = obj;
  }

  changecolor(colors:string){
    if(colors=='green')
    {
      this.checker= 'bg-success';
    }
   else
      {
        this.checker= 'bg-danger';
      }
      
    
  }
}
