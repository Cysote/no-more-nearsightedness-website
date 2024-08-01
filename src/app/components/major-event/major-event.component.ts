import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-major-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './major-event.component.html',
  styleUrl: './major-event.component.css'
})
export class MajorEventComponent implements OnInit {
  @Input() date: String = "";
  @Input() image: String = "";
  @Input() description: String = "";

  show: boolean = false;

  ngOnInit() {
    if(this.image != "") {
      this.show = true;
    }
  }
}
