import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ModalTrailerComponent } from './modal-trailer/modal-trailer.component';

@NgModule({
  declarations: [ButtonComponent, ModalTrailerComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, ModalTrailerComponent],
})
export class ComponentsModule {}
