import { Component } from '@angular/core';
import { MajorEventComponent } from "../../components/major-event/major-event.component";

@Component({
  selector: 'app-my-current-progress-route',
  standalone: true,
  imports: [MajorEventComponent],
  templateUrl: './my-current-progress-route.component.html',
  styleUrl: './my-current-progress-route.component.css'
})
export class MyCurrentProgressRouteComponent {

}
