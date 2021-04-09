import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionlistComponent } from './missionlist/missionlist.component'
import { MissiondetailsComponent } from './missiondetails/missiondetails.component'

const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent },
  { path: 'missions/details/:id', component: MissiondetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
