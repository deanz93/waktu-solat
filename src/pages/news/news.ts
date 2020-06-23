import { Component } from '@angular/core';
import { SportPage } from './sports/sports';
import { BusinessPage } from './business/business';
import { EntertainmentPage } from './entertainment/entertainment';
import { HealthPage } from './health/health';
import { SciencePage } from './science/science';
import { TechnologyPage } from './technology/technology';

@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class NewsPage {
  tab1Root = SportPage;
  tab2Root = BusinessPage;
  tab3Root = EntertainmentPage;
  tab4Root = HealthPage;
  tab5Root = SciencePage;
  tab6Root = TechnologyPage;


  constructor() {}

  }
