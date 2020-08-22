import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from 'src/app/models/social/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:5000/api/";

  getActivities() {
    return this.http.get<Activity[]>(this.baseUrl + 'activities');
  }
  postActivity(body) {
    return this.http.post(this.baseUrl + 'activities', body);
  }
}
