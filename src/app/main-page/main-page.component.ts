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
  constructor(private apiLink: ServicesService,
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
        this.personArray.push(
          {
            name:this.name,
            popularity:this.popularity,
            image:this.linkImage + this.image,
            movie:this.movies
          }
          )
          this.personArray.splice(9,10)
        });
        console.log(this.personArray);
    })
  }

}
