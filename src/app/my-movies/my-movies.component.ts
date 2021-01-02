import { Component, OnInit } from '@angular/core';
import { AddMovieService } from '../add-movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss'],
})
export class MyMoviesComponent implements OnInit {
  arrayMovie = [];
  index: number;

  constructor(private array: AddMovieService) {}
  remove(id) {
    this.index = this.arrayMovie.findIndex((item) => {
      return item.id === id;
    });
    return this.arrayMovie.splice(this.index, 1);
  }
  ngOnInit(): void {
    this.arrayMovie = this.array.getItems();
  }
}
