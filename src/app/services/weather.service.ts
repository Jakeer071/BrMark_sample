// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {
//   private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
//   private apiKey = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

//   constructor(private http: HttpClient) { }

//   getWeather (city: string): Observable<any> {
//     return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;
   private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric&appid=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}