import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import {FormsModule} from '@angular/forms';
import {ToursService} from './tours.service';


@NgModule({
  declarations: [
    AppComponent,
    ToursListComponent,
    TourDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ToursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
