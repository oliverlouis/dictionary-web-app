import { Component } from '@angular/core'
import { SearchService } from '../services/search.service'
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common'
import { map, Observable } from 'rxjs'
import { Word } from '../types/word.interface'

@Component({
  selector: 'dwa-result',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, NgIf],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  protected result$: Observable<Word> = this.searchService.searchResult$.pipe(
    map(res => res[0] as Word),
  )

  constructor(private searchService: SearchService) {}
}
