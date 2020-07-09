import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private httpClient: HttpClient) { }


  public getSensorList() {
    return this.httpClient.get('http://localhost:5000/Sensor');
    
  }
}
