import { MovieShowTimes } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResult } from '../models/movie';
// ng g service [service-name]
// ng g s

@Injectable({
  // Tự động khai báo service vào trong provices
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getMovieList(): Observable<MovieResult[]> {
    const url: string =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim';
    const params = {
      maNhom: 'GP11',
    };
    // return this.http.get<any[]>(this.url);
    return this.http.get<MovieResult[]>(url, { params });
  }

  getShowTimesMovie(movieId: string): Observable<MovieShowTimes[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim';
    const params = {
      maPhim: movieId,
    };
    return this.http.get<MovieShowTimes[]>(url, { params });
  }

  addMovie(movie: any) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh';
    const formData = new FormData();
    for (let key in movie) {
      formData.append(key, movie[key]);
    }
    return this.http.post(url, formData);
  }
}
