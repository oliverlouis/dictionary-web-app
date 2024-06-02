import {
  DestroyRef,
  inject,
  Inject,
  Injectable,
  InjectionToken,
} from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs'
import { Word } from '../types/word.interface'
import { API_ENDPOINT_TOKEN } from '../tokens/api-endpoint.token'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchResultSubject = new BehaviorSubject<Word[]>([])
  public searchResult$ = this.searchResultSubject.asObservable()

  public searchErrorSubject = new Subject<HttpErrorResponse | null>()
  public searchError$ = this.searchErrorSubject.asObservable()

  private destroyRef = inject(DestroyRef)

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_TOKEN) private apiEndpoint: InjectionToken<string>,
  ) {}

  public search(searchTerm: string) {
    return this.http
      .get<Word[]>(`${this.apiEndpoint}${searchTerm}`)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(definition => {
          this.searchResultSubject.next(definition)
          this.searchErrorSubject.next(null)
        }),
        catchError(error => {
          this.searchErrorSubject.next(error)
          console.log(error)
          return error
        }),
      )
      .subscribe()
  }
}
