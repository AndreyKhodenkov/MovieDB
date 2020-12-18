import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class ServicesService {
  apiKey = '7e22234f7aa6e5fa3b5bb4f22ab56eab'
  genres
  item
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
  getTrandingDay(){
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`)
  }
  getTrandingWeek(){
    return this.http.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.apiKey}`)
  }
  getMovieDetail(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`)
  }
  getTrailer(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`)
  }
  getTvDetail(id){
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`)
  }
  getDiscoverMovies(count){
      return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${count}`)
  }
  getGenre(){
   return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
  }
  getDiscoverTv(count){
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${count}&timezone=America%2FNew_York&include_null_first_air_dates=false`)
  }
}
