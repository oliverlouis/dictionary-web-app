import {Component, Input} from '@angular/core';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'dwa-search-input',
  standalone: true,
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input()
  public placeholder?: string;

  constructor(private searchService: SearchService) {
  }

  public onSearch() {
    this.searchService.search('grotesque');
  }
}

