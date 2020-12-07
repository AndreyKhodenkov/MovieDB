import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  linkYouTube = 'https://www.youtube.com/watch?v='
  trailerResults
  itemTrailer
  tralerLinkArray
  trailerKey
  linkTrailer
  videoURL
  constructor(private route: ActivatedRoute,
              private service: ServicesService,
              private sanit: DomSanitizer)
              {
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.service.getMovieDetail(params.id)
      .subscribe(item=>{
        
      })
      this.service.getTrailer(params.id)
      .subscribe(item=>{
        this.itemTrailer = item
        this.trailerResults = this.itemTrailer.results
        this.tralerLinkArray = this.trailerResults[0]
        this.trailerKey = this.tralerLinkArray.key
        this.linkTrailer = this.linkYouTube + this.trailerKey
        this.videoURL = this.sanit.bypassSecurityTrustResourceUrl(this.linkTrailer)
        console.log(this.videoURL);
      })
    })
  }
}

