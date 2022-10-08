import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataCV } from '../models/data-cv';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {


  constructor(
    private http: HttpClient
  ) { }

  getPersonalData(): Observable<any>{
    return this.http.get<{
      name: string,
      job: string,
      phone: string,
      email: string,
      address: string,
      linkedi: string,
      github: string,
      description: string
    }>('/assets/data.json');
  }

  getPersonalSkills(): Observable<any>{
    return this.http.get<Skills[]>('/assets/skills.json');
  }

  getEducationData(): Observable<any>{
    return this.http.get<Education[]>('/assets/education.json');
  }

  getExperienceData(): Observable<any>{
    return this.http.get<Experience[]>('/assets/experience.json');
  }
}