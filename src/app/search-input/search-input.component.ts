import {Component, Input} from '@angular/core';

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
}

