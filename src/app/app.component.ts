import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from './services/get-data.service';
import { DataCV, personalData } from './models/data-cv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebSiteCV';

  constructor(
    private data: GetDataService
  ) {
    this.personalData;
  }

  personalData!: Observable<{
    name: string,
    job: string,
    phone: string,
    email: string,
    address: string,
    linkedi: string,
    github: string,
    description: string
  }>;

  ngOnInit(): void{
    this.personalData = this.data.getPersonalData();
  }

}