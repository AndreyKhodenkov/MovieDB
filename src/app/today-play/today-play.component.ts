import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api-service.service';

@Component({
  selector: 'app-today-play',
  templateUrl: './today-play.component.html',
  styleUrls: ['./today-play.component.scss'],
})
export class TodayPlayComponent implements OnInit {
  constructor(private http: ServicesService) {}
  item;
  results = [];
  name;
  image;
  vote;
  id;
  element;
  movies = [];
  mouse = false;
  linkImage = 'https://image.tmdb.org/t/p/original/';
  count = 10;

  ngOnInit(): void {
    for (let i = 1; i <= this.count; i++) {
      this.http.getTvToday(i).subscribe((item) => {
        this.item = item;
        this.results = this.item.results;
        this.results.forEach((element) => {
          this.element = element;
          this.name = this.element.name;
          this.id = this.element.id;
          this.vote = this.element.vote_average;
          this.image = this.linkImage + this.element.poster_path;
          this.movies.push({
            name: this.name,
            id: this.id,
            vote: this.vote,
            image: this.image,
          });
        });
      });
    }
  }
}
