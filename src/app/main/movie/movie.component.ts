import { MovieService } from 'src/app/core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        // Lấy được mã phim, dùng mã phim gọi API
        this.movieService.getShowTimesMovie(params.movieId).subscribe({
          next: (result) => {},
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
}
