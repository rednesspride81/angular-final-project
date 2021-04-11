import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  SigninParams,
  SigninResult,
  SignupParams,
  SignupResult,
} from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // BehaviorSubject tạo ra 1 đối tượng có thể lưu trữ data
  // currentUser.value => Lấy ra value của biến currentUser
  // currentUser.next(value) => Set lại value của biến current user
  // currentUser.asObservable() => Chuyển current user thành 1 Observable => ta có thể subcribe để theo dõi sự thay đổi data của biến này
  private currentUSerSubject = new BehaviorSubject<SigninResult | null>(null);
  currentUser = this.currentUSerSubject.asObservable();
  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.setCurrentUser(JSON.parse(user));
    }
  }
  setCurrentUser(value: any) {
    this.currentUSerSubject.next(value);
  }

  getCurrentUser() {
    return this.currentUSerSubject.value;
  }

  signin(values: SigninParams): Observable<SigninResult> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post<SigninResult>(url, values);
  }

  signup(values: SignupParams): Observable<SignupResult> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post<SignupResult>(url, { ...values, maNhom: 'GP10' });
  }
}
