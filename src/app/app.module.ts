import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ColorDirective } from './color.directive';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DetailTvComponent } from './detail-tv/detail-tv.component';
import { MoviesComponent } from './movies/movies.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';
import { SerialsComponent } from './serials/serials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FindPipe } from './find.pipe';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    JwPaginationModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
