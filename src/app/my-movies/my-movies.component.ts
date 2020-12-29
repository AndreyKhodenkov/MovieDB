import { Component, OnInit } from '@angular/core';
import { AddMovieService } from '../add-movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  arrayMovie = []
  array1 = []
  removeItem;
  constructor(private array: AddMovieService) { }
  remove(id){
    this.arrayMovie = this.arrayMovie.filter(item=>{
      return item.id !== id
    })
    return this.arrayMovie
  }
  ngOnInit(): void {
   this.arrayMovie = this.array.getItems()
   console.log(this.arrayMovie);

  }

}
