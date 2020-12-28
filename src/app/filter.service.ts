import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterTootgle = true;
  filterArray: any[];

  constructor() { }

  
}
