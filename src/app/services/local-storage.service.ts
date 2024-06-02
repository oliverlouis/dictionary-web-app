import { Injectable } from '@angular/core'
import { Font } from '../types/font.type'
import { BehaviorSubject } from 'rxjs'
import { Mode } from '../types/mode.type'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private fontSubject = new BehaviorSubject<Font>('sans-serif')
  public font$ = this.fontSubject.asObservable()
  private modeSubject = new BehaviorSubject<Mode>('dark')
  public mode$ = this.modeSubject.asObservable()

  constructor() {
    this.getFont()
    this.getMode()
  }

  public setFont(font: Font) {
    localStorage.setItem('font', font)
  }

  public setMode(mode: Mode) {
    localStorage.setItem('mode', mode)
  }

  private getFont() {
    const font = localStorage.getItem('font') as Font
    if (font) {
      this.fontSubject.next(font)
    }
  }

  private getMode() {
    const mode = localStorage.getItem('mode') as Mode
    this.modeSubject.next(mode)
  }
}
