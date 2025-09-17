import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user/user';
interface userObj{
  email:string,
  password:string,
  address:string,
  address2:string,
  state:string,
  zip:number
}
@Injectable({
  providedIn: 'root'
})
export class SharedData {
  private userList = new BehaviorSubject<userObj[]>([]);

  currentList = this.userList.asObservable(); 
  
  SaveData(userObject:any){
    const current = this.userList.getValue();
    this.userList.next([...current, userObject])
  }

}
