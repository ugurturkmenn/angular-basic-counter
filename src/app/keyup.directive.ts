import { Directive, Host, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKeyup]'
})
export class KeyupDirective {

  @Input()
  appKeyupCount: number;

  @Output()
  sendCountEvent = new EventEmitter<number>();

  @HostListener('document:keydown', ['$event']) onKeyDown(e) {
    if( e.keyCode == 32 || e.keyCode == 13) {
      this.sendCountEvent.emit(this.appKeyupCount);
    }
  }
}
