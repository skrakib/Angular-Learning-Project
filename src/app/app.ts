import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from "./components/variables/variables";
import { DataBinding } from './components/data-binding/data-binding';
import { Directive } from "./components/directive/directive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Variables, DataBinding, Directive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Sample-Learning-Project';
}
