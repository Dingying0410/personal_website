import {Component, Input, OnInit} from '@angular/core';
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
    const id = +(this.route.snapshot.paramMap.get('id'));
    this.service.getTour(id).subscribe(tour => this.tour = tour);
  }
}
