import { Component, OnInit } from '@angular/core';
import { FilterService } from '../core/filter.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss'],
})
export class SerialsComponent implements OnInit {
  itemGenre: any;
  genreId: any;
  firstYear = 2020;
  secondYear = 2020;
  constructor(private api: ServicesService, private filter: FilterService) {}
  search = '';
  genre: any;
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
  page = 1;
  pageSize = 24;
  year;
  filterTootgle = true;
  filterArray = [];
  pages = 100;
  showToday = false;
  sortRate(sort) {
    this.filter.sortRate(sort, this.movieArray);
  }

  sortDate(value) {
    this.filter.sortDate(value, this.movieArray);
  }
  filterGenre(id) {
    this.movieArray = this.filterArray;
    this.movieArray = this.movieArray.filter((item) => item.genre === id);
    return this.movieArray;
  }
  filterYear() {
    if (this.firstYear > this.secondYear) {
      this.firstYear = 2020;
      this.secondYear = 2020;
    }
    this.movieArray = this.filterArray;
    this.movieArray = this.filter.findYear(
      this.firstYear,
      this.secondYear,
      this.movieArray
    );
    return this.movieArray;
  }
  ngOnInit(): void {
    this.filterArray = this.movieArray;
    for (let i = 1; i < this.pages; i++) {
      this.api.getDiscoverTv(i).subscribe((item) => {
        this.movieItem = item;
        this.movieResults = this.movieItem.results;
        this.movieResults.forEach((element) => {
          this.element = element;
          this.id = this.element.id;
          this.title = this.element.name;
          this.vote = this.element.vote_average;
          this.image = this.linkImage + this.element.poster_path;
          this.overview = this.element.overview;
          this.release_date = this.element.first_air_date;
          this.genreId = element.genre_ids;
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
            year: this.year,
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
