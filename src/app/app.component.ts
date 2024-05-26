import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchInputComponent} from "./search-input/search-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dictionary-web-app';
}
