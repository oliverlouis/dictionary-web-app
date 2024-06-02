import { Component } from '@angular/core'
import { SearchService } from '../services/search.service'
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common'
import { debounce, map, Observable, tap } from 'rxjs'
import { Word } from '../types/word.interface'

@Component({
  selector: 'dwa-result',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, NgIf, NgFor],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  protected result$: Observable<Word> = this.searchService.searchResult$.pipe(
    map(res => res[0] as Word),
    tap(res => console.log(res)),
  )
  protected readonly debounce = debounce

  constructor(private searchService: SearchService) {}
}
