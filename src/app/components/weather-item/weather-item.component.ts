import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/Models/weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  @Input() weather: List;
  constructor() { }

  ngOnInit(): void {
  }

}
