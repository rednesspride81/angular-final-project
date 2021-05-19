import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isActive: Array<boolean> = [false, false, false, false];
  constructor() {}

  ngOnInit(): void {}
  handleChangeActive(changeEle: number): void {
    for (let i = 0; i < this.isActive.length; i++) {
      this.isActive[i] = false;
    }
    this.isActive[changeEle] = true;
  }
}
