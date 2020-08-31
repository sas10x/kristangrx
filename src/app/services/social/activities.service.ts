import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from 'src/app/models/social/activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:5000/api/activities/";

  
  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.baseUrl);
  }

  getaActivity(activityId: string): Observable<Activity> {
    return this.http.get<Activity>(this.baseUrl + activityId);
  }

  createActivity(model: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.baseUrl, model);
  }

  editActivity(activityId: string | number,changes: Partial<Activity>): Observable<Activity> {
    return this.http.put<Activity>(this.baseUrl + activityId, changes);
  }

  deleteActivity(activityId: string) {
    return this.http.delete(this.baseUrl + activityId);
  }
}
