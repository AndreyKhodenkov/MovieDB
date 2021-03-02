import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]',
  exportAs: 'appColor',
})
export class ColorDirective {
  toggle = true;
  @HostBinding('style.color') color = 'green';
  changeColor(color: string) {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.color = 'red';
    } else {
      this.color = 'red';
    }
  }
  constructor() {}
}
