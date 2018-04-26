import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Tour} from '../../Model/tour';
import {Subscription} from "rxjs/Subscription";
import {ToursService} from "../tours.service";
import {forEach} from "@angular/router/src/utils/collection";
import {ImageService} from "../image.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
@Injectable()
export class ToursListComponent implements OnInit {

  tours : Tour[] = [];

  subscriptionTours: Subscription

  selectedTour: Tour;

  constructor(
    private service : ToursService,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    console.log("123")
    this.getTours()
  }

  onSelect(tour: Tour): void{
    this.selectedTour = tour;
  }

  getTours() : void {
    this.subscriptionTours = this.service.getTours()
      .subscribe(tours =>
      {this.tours = tours
      this.getImage()})
  }

  getImage(): void{
    console.log(this.tours.length)
    for (var i = 0; i < this.tours.length; i++) {
      console.log(this.tours[i].id)
      this.imageService.getImage(+this.tours[i].id);
    }
  }

}
