import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SearchInputComponent} from "./search-input/search-input.component";
import {HeaderComponent} from "./header/header.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchInputComponent, HeaderComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dictionary-web-app';
}
