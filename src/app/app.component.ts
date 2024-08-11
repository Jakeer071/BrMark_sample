import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brandmark-clone';
  menuActive = false;
  currentImageIndex = 0;
  weather: any;

  carousels = [
    ['./assets/image3.jpg' ,'./assets/image4.jpg', './assets/image1.jpg']
  ];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
    this.startImageRotation();
    
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  onButtonClick() {
    alert('Button clicked!');
  }

  startImageRotation() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carousels[0].length;
    }, 3000); // Change image every 3 seconds
  }

  getResponsiveCarousels() {
    if (window.innerWidth < 768) {
      return [this.carousels[0]]; // Show only one carousel on mobile
    }
    return this.carousels;
  }

}
