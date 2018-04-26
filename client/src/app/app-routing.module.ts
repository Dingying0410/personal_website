import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ToursListComponent} from './tours-list/tours-list.component';
import {TourDetailsComponent} from './tour-details/tour-details.component';

export const routes: Routes = [{
  path: '',
  redirectTo: '/tours',
  pathMatch: 'full'
}, {
  path: 'tours',
  component: ToursListComponent
}, {
  path: 'tours/:id',
  component: TourDetailsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
