import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate',
})
export class MyDatePipe implements PipeTransform {
  transform(value:string): string {
    if(value){
      value = value.split('-').reverse().join('.');
      return value;
    }
  }
}
