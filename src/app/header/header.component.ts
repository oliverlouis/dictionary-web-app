import {
  Component,
  DestroyRef,
  inject,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core'
import { DOCUMENT, NgClass } from '@angular/common'
import { LocalStorageService } from '../services/local-storage.service'
import { Font } from '../types/font.type'
import { FormsModule, NgModel } from '@angular/forms'
import { combineLatest, tap } from 'rxjs'

@Component({
  selector: 'dwa-header',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public darkMode = false

  selectOptions: Font[] = ['sans-serif', 'serif', 'mono']
  selectValue = ''

  @ViewChild('selectModel') selectModel!: NgModel
  private destroyRef = inject(DestroyRef)

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService,
  ) {}

  get buttonClasses() {
    return {
      active: this.darkMode,
    }
  }

  public toggleDarkMode(): void {
    this.darkMode = !this.darkMode
    if (this.darkMode) {
      this.document.body.classList.add('dark-mode')
      this.localStorageService.setMode('dark')
    } else {
      this.document.body.classList.remove('dark-mode')
      this.localStorageService.setMode('light')
    }
  }

  public onFontChange(event: Event): void {
    const selectedFont = (event.target as HTMLSelectElement).value as Font
    if (this.document.body.classList.contains(selectedFont)) return
    this.document.body.className = this.document.body.classList.contains(
      'dark-mode',
    )
      ? 'dark-mode'
      : ''
    this.document.body.classList.add(selectedFont)
    this.selectValue = selectedFont
    this.localStorageService.setFont(selectedFont)
  }

  ngOnInit() {
    combineLatest([
      this.localStorageService.font$,
      this.localStorageService.mode$,
    ])
      .pipe(
        tap(([font, mode]) => {
          this.selectValue = font
          this.darkMode = mode === 'dark'
        }),
      )
      .subscribe()

    this.document.body.classList.add(this.darkMode ? 'dark-mode' : '')
  }
}
