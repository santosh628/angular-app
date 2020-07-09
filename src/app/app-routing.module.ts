import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SensorListComponent }   from './sensor-list/sensor-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/sensor', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sensor', component: SensorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
