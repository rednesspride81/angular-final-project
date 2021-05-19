import { MovieResult } from './../../../core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movie-showing',
  templateUrl: './movie-showing.component.html',
  styleUrls: ['./movie-showing.component.scss'],
})
export class MovieShowingComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    margin: 25,
    // autoHeight: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      1110: {
        items: 4,
      },
    },
    nav: true,
  };
  movieList: MovieResult[] = [];
  constructor(private movieService: MovieService) {}
  // Tương đương component didmount, chạy 1 lần sau khi render
  // promise để lấy kết quả thì .then .cacth hoặc sử dụng async a wait

  // Đối với Observable ta sẽ .subscribe
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe({
      // Tự động nhảy vào next khi call API thành công
      next: (result) => {
        this.movieList = result;
      },
      // tự động nhảy vào error khi call API thất bại
      error: (error) => {
        console.log(error);
      },
      // Chạy sau callback next
      complete: () => {
        console.log('DONE');
      },
    });
  }
}
