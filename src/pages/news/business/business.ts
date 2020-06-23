import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Http } from '@angular/http';
@Component({
  selector: 'business',
  templateUrl: 'business.html'
})
export class BusinessPage {

  news: any;
  today: number = Date.now();

  constructor(
    private http: Http,
    private socialSharing: SocialSharing) {

      this.news = []
      this.http.get('https://newsapi.org/v2/top-headlines?country=my&category=business&apiKey=29ad84c2a14a4423bffa14b773df320a&pageSize=100')
      .subscribe(data => {
        this.news = data.json()
      },
      error => {
        console.log(error)
      })

    }

    getItems(x:any){
      this.news = []
      this.http.get('https://newsapi.org/v2/everything?q='+x.target.value+'&apiKey=29ad84c2a14a4423bffa14b773df320a&pageSize=100')
      // // this.http.get('https://newsapi.org/v2/everything?q=proton&apiKey=29ad84c2a14a4423bffa14b773df320a')
      .subscribe(data => {
      this.news = data.json()
    },
    error => {
      console.log(error)
    })
  }

  shareViaWhatsApp(message, image, url) {
    this.socialSharing.shareViaWhatsApp(message, image, url).then(() => {
      // Success!
    }).catch(() => {
    // Error!
  });
}

shareViaTwitter(message, image, url) {
  this.socialSharing.shareViaTwitter(message, image, url).then(() => {
    // Success!
  }).catch(() => {
  // Error!
});
}

shareViaFacebook(message, image, url) {
  this.socialSharing.shareViaFacebook(message, image, url).then(() => {
    // Success!
  }).catch(() => {
  // Error!
});
}

shareVia(message, image, url) {
  this.socialSharing.shareVia('org.telegram.messenger',message, image, url).then(() => {
    // Success!
  }).catch(() => {
    // Error!
    this.socialSharing.shareVia('org.telegram.plus',message, image, url).then(() => {
    // Success!
    }).catch(() => {
    // Error!
    });
  });
  }
}
