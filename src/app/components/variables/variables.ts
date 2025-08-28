import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css'
})
export class Variables {
  firstName: string = "Sk";
  lastName: string = "";
  courseame: string;
  rollNumber: number = 1802028;
  isActive: boolean = false;
  currDate: Date = new Date();
  student : any;
  courseDuration = "3 Hour";
  

  constructor() {
    this.courseame = "Angular 20";
    this.student = "skrakib";
    this.student = 1802028;
    this.courseDuration = '1';
  }
}
