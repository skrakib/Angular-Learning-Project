import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ProgressBar } from "../progress-bar/progress-bar";
import { TemplateForm } from '../template-form/template-form';
import { SharedData } from '../shared-data'
@Component({
  selector: 'app-api-call',
  imports: [NgFor, ProgressBar],
  templateUrl: './api-call.html',
  styleUrl: './api-call.css'
})
export class ApiCall implements OnInit {
  http = inject(HttpClient);

  jsonUsers: any[] = [];
  complaintUsers: any[] = [];

   ngOnInit() {

    this.dataService.currentList.subscribe(response => {
      this.userList = response;
    });
  }
  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      this.jsonUsers = response;
    })
  }

  getComplaintUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((response: any) => {
      this.complaintUsers = response;
    })
    console.log(this.complaintUsers);
  }

  userList: any;
  constructor(private dataService: SharedData) { }
}
