import { Component, OnInit } from '@angular/core';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors;

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.sensorService.getSensorList().subscribe((data)=>{
      console.log("data "+JSON.stringify(data));
     // window.alert(data);
      this.sensors = data;
    });
  }
}
