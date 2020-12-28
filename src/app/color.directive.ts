import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]',
  exportAs:'appColor'
})
export class ColorDirective {
  toogle = true
  @HostBinding('style.color') myColor = 'green'
  chengeColor(color:string){
    this.toogle = !this.toogle
    if(this.toogle){
       this.myColor = 'red'
    }
    else{
      this.myColor = 'red'
    }

  }
  constructor() { }

}
