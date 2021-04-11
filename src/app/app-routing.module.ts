import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: 'admin', canActivate: [AdminGuard], loadChildren: () => AdminModule },
  { path: '', loadChildren: () => MainModule },
  { path: '', loadChildren: () => AuthModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
