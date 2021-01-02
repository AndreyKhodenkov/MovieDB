import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  search = '';
  genre: any[];
  genreId;
  itemGenre;
  func;
  constructor(private api: ServicesService, private filter: FilterService) {}
  linkImage = 'https://image.tmdb.org/t/p/original/';
  id: any;
  title: any;
  image: any;
  vote: any;
  overview: any;
  release_date: any;
  movieArray = [];
  count = 1;
  movieItem;
  movieResults;
  element;
  apigenre;
  page;
  pageSize;
  year;
  filterArray = [];
  filterToogle = false;
  pages = 100;
  sortRate(sort){
    this.filter.sortRate(sort,this.movieArray)
  }
  sortDate(value) {
    this.filter.sortDate(value,this.movieArray)
  }

  filterGenre(id) {
    if (this.filterToogle) {
      this.movieArray = this.movieArray.filter((item) => item.genre === id);
      return this.movieArray;
    }
    if (!this.filterToogle) {
      this.movieArray = this.filterArray;
      this.filterToogle = false;
      return this.movieArray;
    }
  }
  ngOnInit(): void {
    this.filterArray = this.movieArray;
    for (let i = 1; i < this.pages; i++) {
      this.api.getDiscoverMovies(i).subscribe((item) => {
        this.movieItem = item;
        this.movieResults = this.movieItem.results;
        this.page = 1;
        this.pageSize = 24;
        this.movieResults.forEach((element) => {
          this.genreId = element.genre_ids;
          this.element = element;
          this.id = this.element.id;
          this.title = this.element.title;
          this.vote = this.element.vote_average;
          if (this.element.poster_path !== null) {
            this.image = this.linkImage + this.element.poster_path;
          } else {
            this.image = `data:image/png;base64,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`;
          }
          this.overview = this.element.overview;
          this.release_date = this.element.release_date;
          if (this.release_date) {
            this.year = this.release_date.split('-')[0];
          }
          this.movieArray.push({
            title: this.title,
            id: this.id,
            vote: this.vote,
            image: this.image,
            overview: this.overview,
            date: this.release_date,
            year: +this.year,
            genre: +this.genreId,
          });
        });
      });
    }
    this.api.getGenre().subscribe((item) => {
      this.itemGenre = item;
      this.genre = this.itemGenre.genres;
      this.genre = this.genre.filter((item) => item.id !== 10770);
    });
  }
}
