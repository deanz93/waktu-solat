import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { AlertController,ToastController } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  mapReady: boolean = false;
  map: GoogleMap;
  location:any;
  weatherItems: any;
  news: any;
  today: number = Date.now();

  constructor(
    public alertCtrl: AlertController,
    private http: Http,
    private geolocation: Geolocation,
    public toastCtrl: ToastController
    ) {
      this.weatherItems = []
      this.news = []
      this.geolocation.getCurrentPosition().then((resp) => {
        this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+resp.coords.latitude+'&lon='+resp.coords.longitude+'&appid=c2b6026c70d3259f9ee231071268a9e2&units=metric')
        // this.http.get('http://api.openweathermap.org/data/2.5/weather?id=1733037&appid=c2b6026c70d3259f9ee231071268a9e2&units=metric')
        .subscribe(data => {
        // console.log(data.json)
        this.weatherItems.push(data.json())
        // let alert = this.alertCtrl.create({
        //   title: 'Your Location!',
        //   message: 'Latitude: '          + resp.coords.latitude          + '<br/>' +
        //   'Longitude: '         + resp.coords.longitude         + '<br/>' +
        //   'Altitude: '          + resp.coords.altitude          + '<br/>' +
        //   'Accuracy: '          + resp.coords.accuracy          + '<br/>' +
        //   'Altitude Accuracy: ' + resp.coords.altitudeAccuracy  + '<br/>' +
        //   'Heading: '           + resp.coords.heading           + '<br/>' +
        //   'Speed: '             + resp.coords.speed             + '<br/>' +
        //   'Timestamp: '         + resp.timestamp                + '<br/>',
        //   buttons: ['Ok']
        // });
        // alert.present()
      },
      error => {
        console.log(error)
      })
    }).catch((error) => {
    console.log('Error getting location', error);
  });

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 0,
          lng: 0
        },
        zoom: 18,
        tilt: 30
      }
    });

    // Wait the maps plugin is ready until the MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.mapReady = true;
    });

    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));

        // Move the map camera to the location with animation
        return this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        }).then(() => {
          // add a marker
          return this.map.addMarker({
            title: '@ionic-native/google-maps plugin!',
            snippet: 'This plugin is awesome!',
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });
        })
      }).then((marker: Marker) => {
        // show the infoWindow
        marker.showInfoWindow();

        // If clicked it, display the alert
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast('clicked!');
        });
      });
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }
}
