import { SeatPlanModule } from './seat-plan/seat-plan.module';
import { MovieModule } from './movie/movie.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'movie/:movieId', loadChildren: () => MovieModule },
      { path: 'seat-plan', loadChildren: () => SeatPlanModule },
      { path: '', loadChildren: () => HomeModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
