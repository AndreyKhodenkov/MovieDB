import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  apiKey = '7e22234f7aa6e5fa3b5bb4f22ab56eab'
  constructor(private http: HttpClient) { }
  getApiPopular(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getApiTv(){
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getApiNowPlaying(){
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getPopularPerson(){
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }

}
