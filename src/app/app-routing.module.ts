import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { DetailTvComponent } from './detail-serial/detail-tv.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { SerialsComponent } from './serials/serials.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'movie/:id',component:MovieDetailComponent},
  {path:'tv-detail/:id',component:DetailTvComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv',component:SerialsComponent},
  {path:'my-movie',component:MyMoviesComponent},
  {path:'about-person/:id',component:DetailPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
