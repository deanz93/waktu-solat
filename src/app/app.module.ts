import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from "@ionic-native/google-maps";
import { SocialSharing } from '@ionic-native/social-sharing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Weather } from '../pages/weather/weather';
import { waktuSolatPage } from '../pages/waktu-solat/waktu-solat';
import { AsmaPage } from '../pages/asma/asma';
import { NewsPage } from '../pages/news/news';
import { BusinessPage } from '../pages/news/business/business';
import { EntertainmentPage } from '../pages/news/entertainment/entertainment';
import { HealthPage } from '../pages/news/health/health';
import { SciencePage } from '../pages/news/science/science';
import { SportPage } from '../pages/news/sports/sports';
import { TechnologyPage } from '../pages/news/technology/technology';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    Weather,
    waktuSolatPage,
    NewsPage,
    AsmaPage,
    SportPage,
    BusinessPage,
    EntertainmentPage,
    HealthPage,
    SciencePage,
    TechnologyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    Weather,
    waktuSolatPage,
    NewsPage,
    AsmaPage,
    SportPage,
    BusinessPage,
    EntertainmentPage,
    HealthPage,
    SciencePage,
    TechnologyPage
  ],
  providers: [
    AndroidFingerprintAuth,
    Calendar,
    StatusBar,
    SocialSharing,
    Geolocation,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
