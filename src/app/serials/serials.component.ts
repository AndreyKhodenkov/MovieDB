import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent implements OnInit {

  constructor(private api: ServicesService) { }
  genre: any;
  linkImage = 'https://image.tmdb.org/t/p/original/'
  id: any;
  title: any;
  image: any;
  vote: any;
  overview: any;
  release_date: any;
  movieArray = []
  count = 1
  movieItem
  movieResults
  element
  apigenre


  ngOnInit(): void {
    for(let i = 1; i < 40;i++){
      this.api.getDiscoverTv(i)
      .subscribe(item=>{
        console.log(item)
        this.movieItem = item
        this.movieResults = this.movieItem.results
        this.movieResults.forEach(element => {
          this.element = element
          this.id = this.element.id
          this.title = this.element.name
          this.vote = this.element.vote_average
          this.image = this.linkImage + this.element.poster_path
          this.overview = this.element.overview
          this.release_date = this.element.release_date
          this.movieArray.push({
            title:this.title,id:this.id,vote:this.vote,image:this.image,overview:this.overview,date:this.release_date
          })
        });
      })
    }
  }

}
