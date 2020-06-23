import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'Asma Ul Husna',
  templateUrl: 'asma.html'
})
export class AsmaPage {
  today: number = Date.now();
  asma: any = [];
  number: any = [];

  constructor(
    private http: Http) {
      for (let i=1; i<100;i++){
          this.number.push(i)
      }
      this.number = this.number.toString()
      this.http.get('http://api.aladhan.com/asmaAlHusna/'+this.number)
      .subscribe(data => {
        let asma = data.json()
        this.asma.push(asma.data)
      },
      error => {
        console.log(error)
      })
    }

  }
