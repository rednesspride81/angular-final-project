import { MovieService } from 'src/app/core/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: any = {
    tenPhim: 'Tom & jerry',
    biDanh: 'tom-and-jerry',
    trailer: 'https://www.youtube.com/watch?v=fgqEyC19538',
    hinhAnh: '',
    moTa: 'Tom & jerry',
    maNhom: 'GP15',
    ngayKhoiChieu: '30/04/2021',
  };
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
  hanldeChangeFile(event: any) {
    // console.log(event.target.value);
    const file = event.target.value;
    console.log(file);
    this.form.hinhAnh = file;
    console.log(this.form);
  }
  handleAddMovie() {
    // Gọi API thêm phim
    this.movieService.addMovie(this.form).subscribe();
  }
}
