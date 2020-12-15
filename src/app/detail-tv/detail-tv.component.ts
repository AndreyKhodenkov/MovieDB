import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail-tv.component.html',
  styleUrls: ['./detail-tv.component.scss']
})
export class DetailTvComponent implements OnInit {

  linkYouTube = 'https://www.youtube.com/embed/'
  linkImage = 'https://image.tmdb.org/t/p/original/'
  trailerResults
  itemTrailer
  tralerLinkArray
  trailerKey
  linkTrailer
  videoUrl
  tvItem
  title
  image
  date
  backdrop
  overview
  productionCoutry
  productionCompany
  homepage
  spoken
  revenue
  vote
  toogle = true;

  constructor(private rote:ActivatedRoute,
              private service:ServicesService) { }

  ngOnInit(): void {
    this.rote.params.subscribe((params:Params)=>{
      this.service.getTvDetail(params.id)
      .subscribe(item=>{
        console.log(item);

        this.tvItem = item
        this.title = this.tvItem.name
        this.image = this.linkImage + this.tvItem.poster_path
        this.date = this.tvItem.first_air_date
        this.backdrop = this.linkImage + this.tvItem.backdrop_path
        this.overview = this.tvItem.overview
        this.productionCoutry = this.tvItem.production_countries[0].name
        this.productionCompany = this.tvItem.production_companies[0].name
        this.homepage = this.tvItem.homepage
        this.spoken = this.tvItem.spoken_languages[0].name
        this.revenue = this.tvItem.revenue
        this.vote = this.tvItem.vote_average
      })
    })
  }
}
