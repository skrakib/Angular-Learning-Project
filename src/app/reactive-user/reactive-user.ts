import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {
  allUsers: any[] = [];
  http = inject(HttpClient);
  cd = inject(ChangeDetectorRef);

  userObject: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl('')
  });

  ngOnInit(): void {
    this.getallUsers();
  }
  getallUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((response: any) => {
      this.allUsers = response;
      this.cd.detectChanges();
      console.log(this.allUsers);
    })
  }

  onSave() {
    const userData = this.userObject.value;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', userData).subscribe({
      next: (response) => {
        alert('User Registered Successfully');
        this.getallUsers();
      }
      , error: (error) => {
        alert('Something went wrong : ' + error.error);
      }
    })
  }
  onReset() { }


  editUser(user: any) {
    this.userObject.patchValue({ ...user });
  }
  onDelete(userId: number) {
    this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUser?userId=' + userId).subscribe({
      next: (response) => {
        alert('User Deleted Successfully');
        this.getallUsers();
      }
      , error: (error) => {
        alert('Something went wrong : ' + error.error);
      }
    })
  }
}
