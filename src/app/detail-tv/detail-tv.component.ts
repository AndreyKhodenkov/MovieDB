import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail-tv.component.html',
  styleUrls: ['./detail-tv.component.scss']
})
export class DetailTvComponent implements OnInit {

  constructor(private rote:ActivatedRoute,
              private service:ServicesService) { }

  ngOnInit(): void {
    this.rote.params.subscribe((params:Params)=>{
      console.log(params);
    })
  }

}
