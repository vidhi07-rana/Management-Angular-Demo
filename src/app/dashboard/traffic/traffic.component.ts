import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = [
    { id: 'd1', value: 422 },
    { id: 'd2', value: 325 },
    { id: 'd3', value: 762 },
    { id: 'd4', value: 624 },
    { id: 'd5', value: 924 },
    { id: 'd6', value: 344 },
    { id: 'd7', value: 124 },
    { id: 'd8', value: 524 },
    { id: 'd9', value: 664 }





  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data)=>data.value));
}
