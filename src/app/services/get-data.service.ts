import { HttpClient } from '@angular/common/http';
import { DataCV } from '../models/data-cv';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}