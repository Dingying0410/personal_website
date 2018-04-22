import { Component, OnInit } from '@angular/core';
import {Tours} from '../mock-tours';
import {Tour} from '../../Model/tour';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  tours = Tours;

  selectedTour: Tour;

  constructor() { }

  ngOnInit() {
  }

  onSelect(tour: Tour): void{
    this.selectedTour = tour;
  }

}
