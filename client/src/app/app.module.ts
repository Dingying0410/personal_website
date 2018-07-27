import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import {FormsModule} from '@angular/forms';
import {ToursService} from './tours.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpErrorHandler} from "./http-error-handler.service";
import {MessageService} from "./message.service";
import {ImageService} from "./image.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ToursListComponent,
    TourDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    ToursService,
    HttpErrorHandler,
    MessageService,
    ImageService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
