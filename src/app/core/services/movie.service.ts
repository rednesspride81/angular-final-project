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
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP15';
    const params = {
      maNhom: 'GP15',
    };
    // return this.http.get<any[]>(this.url);
    return this.http.get<any[]>(url, { params });
  }
}
