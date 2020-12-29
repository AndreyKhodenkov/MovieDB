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
  deleteMovie(movie){
    this.index = this.movies.indexOf(movie.id)
    this.movies.slice(this.index,1)
  }
  getItems() {
    return this.movies;
  }

  clearCart() {
    this.movies = [];
    return this.movies;
  }
}
