import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() { }
  filterArray = [];
  sortRate(sort,movieArray) {
    if (sort) {
      return movieArray.sort((a, b) => (a.vote > b.vote ? 1 : -1));
    }
    return movieArray.sort((a, b) => (a.vote > b.vote ? -1 : 1));
  }
  sortDate(value,movieArray) {
    if (value) {
      return movieArray.sort((a, b) => (a.year > b.year ? 1 : -1));
    }
    return movieArray.sort((a, b) => (a.year > b.year ? -1 : 1));
  }
}
