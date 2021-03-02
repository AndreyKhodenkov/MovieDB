import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DetailTvComponent } from './detail-serial/detail-tv.component';
import { MoviesComponent } from './movies/movies.component';
import { SerialsComponent } from './serials/serials.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { TodayPlayComponent } from './today-play/today-play.component';
import { ColorDirective } from './core/color.directive';
import { GenderPipe } from './core/gender.pipe';
import { MyDatePipe } from './core/format-date.pipe';
import { FindPipe } from './core/find.pipe';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwPaginationModule } from 'jw-angular-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    MovieDetailComponent,
    ColorDirective,
    DetailTvComponent,
    MoviesComponent,
    SerialsComponent,
    FindPipe,
    MyMoviesComponent,
    MyDatePipe,
    DetailPersonComponent,
    GenderPipe,
    TodayPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    JwPaginationModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
