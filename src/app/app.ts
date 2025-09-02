import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Variables } from "./components/variables/variables";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Sample-Learning-Project';
}
