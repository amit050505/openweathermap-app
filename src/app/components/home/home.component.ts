import { Component, OnInit } from '@angular/core';
import { WeatherForCitiesresponse } from 'src/app/Models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherForCities: WeatherForCitiesresponse;

  constructor(private weatherSevice: WeatherService) { }

  ngOnInit(): void {
    this.loadWeatherForAllCities();
  }

  loadWeatherForAllCities() {
    this.weatherSevice.getWeatherForCitiesByBbox().subscribe((response: WeatherForCitiesresponse) => {
      console.log(response);
      this.weatherForCities = response;
    })
  }
}
