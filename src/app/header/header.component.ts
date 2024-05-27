import {Component, Inject} from '@angular/core';
import {DOCUMENT, NgClass} from "@angular/common";

@Component({
  selector: 'dwa-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public darkMode = false;

  get buttonClasses() {
    return {
      active: this.darkMode
    }
  }

  public toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
  }

  public onFontChange(event: Event): void {
    const selectedFont = (event.target as HTMLSelectElement).value;
    if (this.document.body.classList.contains(selectedFont)) return;
    this.document.body.className = this.document.body.classList.contains('dark-mode') ? 'dark-mode' : ''
    this.document.body.classList.add(selectedFont);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }
}
