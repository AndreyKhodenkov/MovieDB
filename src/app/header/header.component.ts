import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  link
  resultsMovie
  itemLinkMovie
  movieAraay = []
  title
  poster
  linkPoster = 'https://image.tmdb.org/t/p/w500'
  imagePoter=[]

  resultsTv
  itemTv
  backdropTv
  titleTv
  arrayTv = []

  itemPlaying
  resultsPlaying
  arrayPlaying = []
  namePlaying
  backdropPlaying



  constructor(private apiLink: ServicesService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.apiLink.getApiPopular()
    .subscribe(item=>{
      this.itemLinkMovie = item
      this.resultsMovie = this.itemLinkMovie.results
      this.resultsMovie.forEach(element => {
        if(element.title.length > 25){
          this.title = element.title.slice(0,25) + '...'
        }
        else{
          this.title = element.title
        }
        this.poster = element.backdrop_path
        this.movieAraay.push(
          {title:this.title,poster:this.linkPoster + this.poster}
        )
      });
    })
    this.apiLink.getApiTv()
    .subscribe(itemTv=>{
      this.itemTv = itemTv
      this.resultsTv = this.itemTv.results
      this.resultsTv.forEach(element => {
        if(element.name.length > 25){
          this.titleTv = element.name.slice(0,25) + '...'
        }
        else{
          this.titleTv = element.name
        }
        this.titleTv = element.name
        this.backdropTv = element.backdrop_path
        this.arrayTv.push(
          {name:this.titleTv,backdrop:this.linkPoster + this.backdropTv}
        )
      });
    })
    this.apiLink.getApiNowPlaying()
    .subscribe(itemNow=>{
      this.itemPlaying = itemNow
      this.resultsPlaying = this.itemPlaying.results
      this.resultsPlaying.forEach(element => {
        if(element.title.length > 25){
          this.namePlaying = element.title.slice(0,25) + '...'
        }
        else{
          this.namePlaying = element.name
        }
        this.namePlaying = element.title
        this.backdropPlaying = element.backdrop_path
        this.arrayPlaying.push(
          {name:this.namePlaying,backdrop:this.linkPoster + this.backdropPlaying}
        )
      });
    })
  }
}
