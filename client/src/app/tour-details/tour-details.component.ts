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
  imageToShow: any[];
  imageLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: ToursService
  ) { }

  ngOnInit() {
    this.getTour();
    this.imageToShow=[]
  }

  getTour(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.service.getTour(+params['id'])
        .subscribe(tour => this.tour = tour)
      this.getImageNames(+params['id'])
    }, err => {
      console.log(err)
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    console.log(image)
    reader.addEventListener("load", () => {
      this.imageToShow.push(reader.result)
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  /**
   * Get the list of names of the image in a tour
   * @param {number} id: tour id
   */
  getImageNames(id: number) {
    this.service.getTourImageNames(id).subscribe(images => {
      console.log("Images in " + id)
      console.log(images)
      for (let image of images){
        this.getImageFromService(id + '/' + image)
      }
    })
  }

  /**
   * Get image with id
   * @param {String} id: name of the image
   */
  getImageFromService(id: String) {
    this.imageLoading = true;
    console.log("Getting images from service at client side")
    this.service.getTourImage(id).subscribe(data => {
      this.createImageFromBlob(data);
      this.imageLoading = false;

    }, error => {
      this.imageLoading = false;
      console.log(error);
    });
  }
}
