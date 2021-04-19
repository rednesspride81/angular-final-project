import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ModalTrailerComponent } from './modal-trailer/modal-trailer.component';
import { MovieTheaterListComponent } from './movie-theater-list/movie-theater-list.component';

@NgModule({
  declarations: [ButtonComponent, ModalTrailerComponent, MovieTheaterListComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, ModalTrailerComponent],
})
export class ComponentsModule {}
