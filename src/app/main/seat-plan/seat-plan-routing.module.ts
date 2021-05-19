import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatPlanComponent } from './seat-plan.component';

const routes: Routes = [{ path: '', component: SeatPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatPlanRoutingModule {}
