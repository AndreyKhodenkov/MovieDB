import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']

})
export class MainPageComponent implements OnInit {
  item
  result = []
  personArray = []
  name
  popularity
  movies = []
  image
  linkImage = 'https://image.tmdb.org/t/p/original/'
  arrayPersonMovie = []
  titleMovie
  posterMovie
  personId
  nowPlayingResults
  nowItem
  nowPlayingId
  nowPlayingTitle
  nowPlayingImage
  nowPlayingArray = []

  itemTv
  tvResults
  tvName
  tvId
  tvImage
  tvArray = []

 constructor(private apiLink: ServicesService,
              private http: HttpClient
              ) { }
  ngOnInit(): void {
    this.apiLink.getPopularPerson()
    .subscribe(item=>{
      this.item = item
      this.result = this.item.results
      this.result.forEach(element => {
        this.name = element.name
        this.popularity = element.popularity*1000
        this.movies = element.known_for
        this.image = element.profile_path
        this.personId = element.id
        this.personArray.push(
          {
            name:this.name,
            popularity:this.popularity,
            image:this.linkImage + this.image,
            movie:this.movies,
            id:this.personId
          }
          )
          this.personArray.splice(9,10)
        });
    })
    this.apiLink.getApiNowPlaying()
    .subscribe(item=>{
      this.nowItem = item
      this.nowPlayingResults = this.nowItem.results
      this.nowPlayingResults.forEach(element => {
          this.nowPlayingId = element.id
          this.nowPlayingTitle = element.title
          this.nowPlayingImage = element.poster_path
          this.nowPlayingArray.push(
            {name:this.nowPlayingTitle,d:this.nowPlayingId,image:this.linkImage + this.nowPlayingImage}
          )
          console.log(this.nowPlayingArray);

      });
    })
    this.apiLink.getApiTv()
    .subscribe(item=>{
      this.itemTv = item
      this.tvResults = this.itemTv.results
      this.tvResults.forEach(element => {
          this.tvName = element.name
          this.tvImage = element.poster_path
          this.tvId = element.id
          this.tvArray.push(
            {name:this.tvName,id:this.tvId,image:this.linkImage + this.tvImage}
          )//create pipe
      });
    })
  }
}
