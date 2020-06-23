import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import { Geolocation } from '@ionic-native/geolocation';
// declare var google;

@Component({
  selector: 'Waktu Solat',
  templateUrl: 'waktu-solat.html'
})
export class waktuSolatPage {
  waktusolat: any=[];
  today: number = Date.now();
  form = {}
  selectedstate: any=[];

  constructor(
    // private geolocation: Geolocation,
    private http: Http) {
      this.form = []
      this.waktusolat = []
    }

    getdaerah(x) {
      this.http.get('https://api.azanpro.com/zone/grouped.json?state='+ x.toLowerCase())
        .subscribe(data => {
          this.selectedstate = data.json();
        },
        error => {
          console.log(error);
        })
    }

    getwaktu(x) {
      this.http.get('http://api.azanpro.com/times/today.json?zone='+ x.toLowerCase()+'&format=12-hour')
        .subscribe(data => {
          this.waktusolat.push(data.json());
        },
        error => {
          console.log(error);
        })
    }
  }
