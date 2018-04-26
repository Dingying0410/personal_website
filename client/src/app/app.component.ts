import { Component } from '@angular/core';
import {ToursService} from "./tours.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToursService]
})
export class AppComponent {
  title = 'app';
}
