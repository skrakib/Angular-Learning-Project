import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef} from '@angular/core';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  http = inject(HttpClient);
  allUsers: any[] = [];
  cd = inject(ChangeDetectorRef);
  userObject: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: ''
  };

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
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObject).subscribe({
      next: (response) => {
        alert('User Registered Successfully');
        this.getallUsers();
      }
      , error: (error) => {
        alert('Something went wrong : ' + error.error);
      }
    })
  }
  onReset() {
    this.userObject = { 
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: ''
    };
  }
editUser(user:any){
  this.userObject = {...user};
}
  onUpdate(userId:number) {
    // this.userObject.createdDate = new Date();
    // this.userObject.projectName = "GoalTracker";
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + userId, this.userObject).subscribe({
      next: (response) => {
        alert('User Updated Successfully');
        this.getallUsers();
      },
      error:(error)=>{
        alert('Something went wrong : ' + error.error);
      }
   })
  }
  onDelete(userId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if(confirmDelete){
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+userId).subscribe({
        next:(response)=>{
          alert('User Deleted Successfully');
          this.getallUsers();
        }
        ,error:(error)=>{
          alert('Something went wrong : ' + error.error);
        }
      })
    }
  }

}

