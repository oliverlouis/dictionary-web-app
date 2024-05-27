import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Word} from "../types/word.interface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public search(searchTerm: string) {
    return this.http.get<Word>(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`).pipe(tap((response) => console.log(response))).subscribe()
  }

  constructor(private http: HttpClient) {
  }
}
