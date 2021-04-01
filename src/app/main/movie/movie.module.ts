import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { ShowtimesComponent } from './showtimes/showtimes.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [MovieComponent, ShowtimesComponent, MovieInfoComponent],
  imports: [CommonModule, MovieRoutingModule],
})
export class MovieModule {}
