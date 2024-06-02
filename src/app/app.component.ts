import { Component, DestroyRef, Inject, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SearchInputComponent } from './search-input/search-input.component'
import { HeaderComponent } from './header/header.component'
import { HttpClient } from '@angular/common/http'
import { ResultComponent } from './result/result.component'
import { LocalStorageService } from './services/local-storage.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchInputComponent,
    HeaderComponent,
    ResultComponent,
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dictionary-web-app'
  private destroyRef = inject(DestroyRef)
  private font$ = this.localStorageService.font$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(font => {
      if (!this.document.body.classList.contains(font)) {
        this.document.body.classList.add(font)
      }
    })

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService,
  ) {}
}
