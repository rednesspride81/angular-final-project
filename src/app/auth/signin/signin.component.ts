import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '@/core/services/auth.service';
import { Router } from '@angular/router';

import {
  faThumbsUp,
  faThumbtack,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  error: string = '';
  isLoading: boolean = false;

  // Font awesome icon
  faThumbsUp = faThumbsUp;
  faThumbtack = faThumbtack;
  faHashtag = faHashtag;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  handleSignin() {
    // Chặn khi người dùng submit nhưng value chưa hợp lệ
    if (this.signinForm.invalid) return;
    this.isLoading = true;
    this.authService.signin(this.signinForm.value).subscribe({
      next: (result) => {
        this.isLoading = false;
        // Set giá trị đăng nhập kết quả cho biến current user trên auth Service
        this.authService.setCurrentUser(result);
        // Lưu data xuống local storage
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.error;
      },
    });
  }
}
