import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForecastResponse, WeatherDetailsResponse, WeatherForCitiesresponse } from '../Models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForCitiesByBbox() {
    return this.http.get<WeatherForCitiesresponse>("https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=3d8b309701a13f65b660fa2c64cdc517");
  }

  getWeatherDetails(id: string) {
    return this.http.get<WeatherDetailsResponse>(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }

  getWeatherForecast(id: string) {
    return this.http.get<ForecastResponse>(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
}
