import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebSiteCV';

  personalData: any;

  constructor(
    private data: GetDataService
  ) {
    
  }

  // personalData!: Observable<{
  //   name: string,
  //   job: string,
  //   phone: string,
  //   email: string,
  //   address: string,
  //   linkedi: string,
  //   github: string,
  //   description: string
  // }>;

  ngOnInit(): void{
    this.GetPersonalData();
  }

  GetPersonalData() {
    this.data.getPersonalData().subscribe(data => {
      this.personalData = data;
      console.log(this.personalData);
    }, error => {
      console.error(error)
    })
  }

}