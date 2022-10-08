import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebSiteCV';

  personalData: any;
  personalSkills: any[] = [];
  education: any[] = [];
  experience: any[] = [];

  constructor(
    private data: GetDataService
  ) {
    
  }

  ngOnInit(): void{
    this.GetPersonalData();
    this.GetPersonalSkills();
    this.GetEducationData();
    this.GetExperienceData();
  }

  GetPersonalData() {
    this.data.getPersonalData().subscribe(data => {
      this.personalData = data;
    }, error => {
      console.error(error)
    })
  }

  GetPersonalSkills() {
    this.data.getPersonalSkills().subscribe(data => {
      this.personalSkills = data;
    }, error => {
      console.error(error);
    })
  }
  
  GetEducationData() {
    this.data.getEducationData().subscribe(data => {
      this.education = data;
    }, error => {
      console.error(error);
    })
  }

  GetExperienceData() {
    this.data.getExperienceData().subscribe(data => {
      this.experience = data;
      console.log(this.experience);
    }, error => {
      console.error(error);
    })
  }
}