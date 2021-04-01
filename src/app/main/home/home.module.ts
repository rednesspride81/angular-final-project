import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieShowingComponent } from './movie-showing/movie-showing.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, MovieShowingComponent, CinemaListComponent, NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
