import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ProgressBar } from "../progress-bar/progress-bar";
import { TemplateForm } from '../template-form/template-form';
import { SharedData } from '../shared-data'
@Component({
  selector: 'app-api-call',
  imports: [NgFor, ProgressBar],
  templateUrl: './api-call.html',
  styleUrl: './api-call.css'
})
export class ApiCall {
  http = inject(HttpClient);

  jsonUsers: any[] = [];
  complaintUsers: any[] = [];


  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      this.jsonUsers = response;
    })
  }

  getComplaintUsers() {

    this.http.get('https://crudcrud.com/api/c190eab0de0c45b9b1644a8b7e964b1e/unicorns').subscribe((response: any) => {

      this.complaintUsers = response;
    })
    console.log(this.complaintUsers);
  }

  userList: any;
  constructor(private dataService: SharedData) { }
  ngOnInit() {
    this.dataService.currentList.subscribe(response => {
      this.userList = response;
    });
  }
}
