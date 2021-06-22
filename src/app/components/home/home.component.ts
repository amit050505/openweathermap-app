import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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
  weatherList: WeatherDetailsResponse[];

  constructor(public weatherSevice: WeatherService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadWeatherForAllCities();
  }

  loadWeatherForAllCities() {
    // this.weatherSevice.getWeatherForCitiesByBbox().subscribe((response: WeatherForCitiesresponse) => {
    //   this.weatherForCities = response;
    //   this.weatherForCities.list = response.list.slice(0, 5);
    // })

    const data = forkJoin(
      {
        d1: this.weatherSevice.getWeatherForCitiesByCity("London"),
        d2: this.weatherSevice.getWeatherForCitiesByCity("Rome"),
        d3: this.weatherSevice.getWeatherForCitiesByCity("Paris"),
        d4: this.weatherSevice.getWeatherForCitiesByCity("Berlin"),
        d5: this.weatherSevice.getWeatherForCitiesByCity("Amsterdam")
      }
    )
    data.subscribe(response => {
      this.weatherList = [response.d1, response.d2, response.d3, response.d4, response.d5];
    })
  }

  getWeatherDetails(id: string) {
    this.router.navigate(['/weatherDetails', { id: id }]);
  }
}
