import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'movie/:id',component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
