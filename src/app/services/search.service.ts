import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Word} from "../types/word.interface";
import {API_ENDPOINT_TOKEN} from "../tokens/api-endpoint.token";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_TOKEN) private apiEndpoint: InjectionToken<string>
  ) {
  }

  public search(searchTerm: string) {
    return this.http.get<Word>(`${this.apiEndpoint}${searchTerm}`).pipe(tap((response) => console.log(response))).subscribe()
  }
}
