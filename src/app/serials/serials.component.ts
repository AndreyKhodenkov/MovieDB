import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss'],
})
export class SerialsComponent implements OnInit {
  itemGenre: any;
  genreId: any;
  constructor(private api: ServicesService) {}
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
  sortRate(sort) {
    if (sort) {
      return this.movieArray.sort((a, b) => (a.vote > b.vote ? 1 : -1));
    }
    return this.movieArray.sort((a, b) => (a.vote > b.vote ? -1 : 1));
  }
  sortDate(value) {
    if (value) {
      return this.movieArray.sort((a, b) => (a.year > b.year ? 1 : -1));
    }
    return this.movieArray.sort((a, b) => (a.year > b.year ? -1 : 1));
  }

  filterGenre(id) {
    if (this.filterTootgle) {
      this.movieArray = this.movieArray.filter((item) => item.genre === id);
      return this.movieArray;
    }
    if (!this.filterTootgle) {
      this.movieArray = this.filterArray;
      this.filterTootgle = false;
      return this.movieArray;
    }
  }
  ngOnInit(): void {
    this.filterArray = this.movieArray;
    for (let i = 1; i < 140; i++) {
      this.api.getDiscoverTv(i).subscribe((item) => {
        console.log(item);
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
