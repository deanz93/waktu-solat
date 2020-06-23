import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  templateUrl: 'weather.html'
})
export class Weather {
  weatherItems: any;
  weatherSearch: any;
  location:any;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private geolocation: Geolocation
  ) {

    this.weatherItems = []
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+resp.coords.latitude+'&lon='+resp.coords.longitude+'&appid=c2b6026c70d3259f9ee231071268a9e2&units=metric')
      .subscribe(data => {
      this.weatherItems.push(data.json())
      let alert = this.alertCtrl.create({
        title: 'Your Location!',
        message: 'Latitude: '          + resp.coords.latitude          + '\n' +
        'Longitude: '         + resp.coords.longitude         + '\n' +
        'Altitude: '          + resp.coords.altitude          + '\n' +
        'Accuracy: '          + resp.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + resp.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + resp.coords.heading           + '\n' +
        'Speed: '             + resp.coords.speed             + '\n' +
        'Timestamp: '         + resp.timestamp                + '\n',
        buttons: ['Ok']
      });
      alert.present()
    },
    error => {
      console.log(error)
    })
  }).catch((error) => {
  console.log('Error getting location', error);
});

}

getItems(ev:any){
  this.weatherSearch = []
  this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' +ev.target.value+ '&appid=c2b6026c70d3259f9ee231071268a9e2&units=metric')
  .subscribe(
    response => {
      if (response.status === 200){
        this.weatherSearch.push(response.json())
      }
      else {
        // do nothing
      }
    },
    error => {
      console.log(error)
    })
  }

}
