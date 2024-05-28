import {Component, Input} from '@angular/core';
import {SearchService} from "../services/search.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'dwa-search-input',
  standalone: true,
  templateUrl: './search-input.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input()
  public placeholder?: string;

  public inputValue = '';

  constructor(private searchService: SearchService) {
  }

  public onSearch() {
    this.searchService.search(this.inputValue);
  }
}

