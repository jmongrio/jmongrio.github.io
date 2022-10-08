import { HttpClient } from '@angular/common/http';
import { DataCV } from '../models/data-cv';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {


  constructor(
    private http: HttpClient
  ) { }

  getPersonalData(){
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