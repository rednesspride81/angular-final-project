import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  constructor(el: ElementRef) {}

  ngOnInit(): void {}
}
