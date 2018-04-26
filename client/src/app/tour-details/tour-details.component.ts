import {Component, Inject, Input, OnInit} from '@angular/core';
import {Tour} from '../../Model/tour';
import {ActivatedRoute} from '@angular/router';
import {ToursService} from '../tours.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  @Input() tour: Tour;

  constructor(
    private route: ActivatedRoute,
    private service: ToursService
  ) { }

  ngOnInit() {
    this.getTour();
  }

  getTour(): void {
    console.log("123")
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.service.getTour(+params['id'])
        .subscribe(tour => this.tour = tour)
    })
  }
}
