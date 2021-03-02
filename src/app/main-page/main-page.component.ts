import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../api-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  item;
  result = [];
  personArray = [];
  name;
  popularity;
  movies = [];
  image;
  linkImage = 'https://image.tmdb.org/t/p/original/';
  titleMovie;
  posterMovie;
  personId;
  nowPlayingResults;
  nowItem;
  nowPlayingId;
  nowPlayingTitle;
  nowPlayingImage;
  nowVote;
  nowPlayingArray = [];
  itemTv;
  tvResults;
  tvName;
  tvId;
  tvImage;
  tvVote;
  tvArray = [];
  toogle = true;
  trendDayItem;
  trendDayResults;
  trendDayElement;
  trendDayArray = [];
  trendWeekItem;
  trendWeekResults;
  trendWeekElement;
  trendWeekArray = [];
  constructor(
    private apiLink: ServicesService,
    private http: HttpClient,
    config: NgbRatingConfig
  ) {
    config.max = 10;
    config.readonly = true;
  }
  ngOnInit(): void {
    this.apiLink.getPopularPerson().subscribe((item) => {
      this.item = item;
      this.result = this.item.results;
      this.result.forEach((element) => {
        this.name = element.name;
        this.popularity = Math.floor(element.popularity * 1000);
        this.movies = element.known_for;
        this.image = element.profile_path;
        this.personId = element.id;
        this.personArray.push({
          name: this.name,
          popularity: this.popularity,
          image: this.linkImage + this.image,
          movie: this.movies,
          id: this.personId,
        });
      });
    });
    this.apiLink.getApiNowPlaying().subscribe((item) => {
      this.nowItem = item;
      this.nowPlayingResults = this.nowItem.results;
      this.nowPlayingResults.forEach((element) => {
        this.nowPlayingId = element.id;
        this.nowPlayingTitle = element.title;
        this.nowPlayingImage = element.poster_path;
        this.nowVote = element.vote_average;
        this.nowPlayingArray.push({
          name: this.nowPlayingTitle,
          id: this.nowPlayingId,
          image: this.linkImage + this.nowPlayingImage,
          vote: this.nowVote,
        });
      });
    });
    this.apiLink.getApiTv().subscribe((item) => {
      this.itemTv = item;
      this.tvResults = this.itemTv.results;
      this.tvResults.forEach((element) => {
        this.tvVote = element.vote_average;
        this.tvName = element.name;
        this.tvImage = element.poster_path;
        this.tvId = element.id;
        this.tvArray.push({
          name: this.tvName,
          id: this.tvId,
          image: this.linkImage + this.tvImage,
          vote: this.tvVote,
        });
      });
    });
    this.apiLink.getTrendingDay().subscribe((item) => {
      this.trendDayItem = item;
      this.trendDayResults = this.trendDayItem.results;
      this.trendDayResults.forEach((element) => {
        this.trendDayElement = element;
        this.trendDayArray.push(this.trendDayElement);
      });
    });
    this.apiLink.getTrendingWeek().subscribe((item) => {
      this.trendWeekItem = item;
      this.trendWeekResults = this.trendWeekItem.results;
      this.trendWeekResults.forEach((element) => {
        this.trendWeekElement = element;
        this.trendWeekArray.push(this.trendWeekElement);
      });
    });
  }
}
