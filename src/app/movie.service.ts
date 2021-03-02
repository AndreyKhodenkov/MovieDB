import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
  movies = [];
  index;
  constructor() { }
  addToCart(movie) {
    this.movies.push(movie);
  }
  getItems() {
    return this.movies;
  }
}
