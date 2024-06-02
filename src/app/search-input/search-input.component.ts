import {
  AfterViewInit,
  Component,
  DestroyRef,
  HostBinding,
  inject,
  Input,
  ViewChild,
} from '@angular/core'
import { SearchService } from '../services/search.service'
import { FormsModule, NgModel } from '@angular/forms'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { tap } from 'rxjs'

@Component({
  selector: 'dwa-search-input',
  standalone: true,
  templateUrl: './search-input.component.html',
  imports: [FormsModule],
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent implements AfterViewInit {
  @Input()
  public placeholder?: string
  public inputValue = ''
  @ViewChild('inputModel') inputModel!: NgModel

  @HostBinding('class.has-error')
  public error = false
  private destroyRef = inject(DestroyRef)

  constructor(private searchService: SearchService) {}

  public onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch()
    }
  }

  public onSearch() {
    if (!this.inputValue.length) {
      this.error = true
      return
    }
    this.searchService.search(this.inputValue)
  }

  ngAfterViewInit() {
    this.inputModel.valueChanges
      ?.pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(value => {
          if (value.length && this.error) {
            this.error = false
          }
        }),
      )
      .subscribe()
  }

  private isKeyboardEvent(event: Event): event is KeyboardEvent {
    return (event as KeyboardEvent).key !== undefined
  }

  private isMouseEvent(event: Event): event is MouseEvent {
    return (event as MouseEvent).clientX !== undefined
  }
}
