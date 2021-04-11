import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/core/services/auth.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  currentUser: any = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe({
      next: (data) => {
        this.currentUser = data;
      },
    });
  }
}
