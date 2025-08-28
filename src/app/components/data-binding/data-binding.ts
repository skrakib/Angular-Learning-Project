import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Mathematics IV";
  courseDuration: string = "4 hours";
  placeHolderText: string = "Enter PlaceHolder Text";
  isActive=false;

  onclickAlert() {
    alert("WELcome to Angular Learning");
  }
  onclickAlert2(obj: any) {
    alert(obj);
  }
  onclickAlert3(obj: any) {
    alert("WELcome to Angular Learning");
  }
  onStateChange(id:any)
  {
    alert("State has changed to" + id.target.value)
  }
}
