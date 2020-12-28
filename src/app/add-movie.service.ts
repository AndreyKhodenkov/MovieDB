import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
  movies = [];
  constructor() { }
  addToCart(movie) {
    this.movies.push(movie);
    console.log(this.movies);
  }

  getItems() {
    return this.movies;
  }

  clearCart() {
    this.movies = [];
    return this.movies;
  }
}
