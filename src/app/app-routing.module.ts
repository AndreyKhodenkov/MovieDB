import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailTvComponent } from './detail-tv/detail-tv.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'movie/:id',component:MovieDetailComponent},
  {path:'tv-detail/:id',component:DetailTvComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv',component:SerialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
