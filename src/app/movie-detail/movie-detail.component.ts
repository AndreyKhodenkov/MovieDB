import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: ServicesService){

  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      
      this.service.getMovieDetail(params.id)
      .subscribe(item=>{
        console.log(item);

      })
    })
  }
}

