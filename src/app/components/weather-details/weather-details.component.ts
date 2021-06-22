import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ForecastResponse, WeatherDetailsResponse } from 'src/app/Models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailsComponent implements OnInit {

  weather: WeatherDetailsResponse;
  forecast: ForecastResponse;
  constructor(private weatherSevice: WeatherService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.weatherSevice.getWeatherDetails(params['id'].toString()).subscribe((response: WeatherDetailsResponse) => {
        this.weather = response;
      })

      this.weatherSevice.getWeatherForecast(params['id'].toString()).subscribe((response: ForecastResponse) => {
        this.forecast = response;
        this.forecast.list = response.list.filter(x => x.dt_txt.split(' ')[1].split(':')[0] == "09");
      })
    });


  }

  getDate(dt: string) {
    return dt?.split(' ')[0].split('-')[2]
  }


}
