import {Component, Input} from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
  selector: 'dwa-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input()
  public placeholder?: string;

  constructor(private httpService: HttpService) {
  }

  public onSearch() {
    this.httpService.search('grotesque');
  }
}

