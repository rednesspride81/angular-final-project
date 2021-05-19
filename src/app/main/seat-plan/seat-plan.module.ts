import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatPlanRoutingModule } from './seat-plan-routing.module';
import { SeatPlanComponent } from './seat-plan.component';


@NgModule({
  declarations: [SeatPlanComponent],
  imports: [
    CommonModule,
    SeatPlanRoutingModule
  ]
})
export class SeatPlanModule { }
