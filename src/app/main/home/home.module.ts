import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieShowingComponent } from './movie-showing/movie-showing.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { NewsComponent } from './news/news.component';

// use modal trailer
import { ComponentsModule } from './../../shared/components/components.module';

// owl carousel
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    MovieShowingComponent,
    CinemaListComponent,
    NewsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CarouselModule, ComponentsModule],
})
export class HomeModule {}
