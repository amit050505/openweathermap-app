import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDetailsResponse, WeatherForCitiesresponse } from 'src/app/Models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  weatherForCities: WeatherForCitiesresponse;

  constructor(private weatherSevice: WeatherService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadWeatherForAllCities();
  }

  loadWeatherForAllCities() {
    this.weatherSevice.getWeatherForCitiesByBbox().subscribe((response: WeatherForCitiesresponse) => {
      this.weatherForCities = response;
      this.weatherForCities.list = response.list.slice(0, 5);
    })
  }
  getWeatherDetails(id: string) {
    this.router.navigate(['/weatherDetails', { id: id }]);
  }
}
