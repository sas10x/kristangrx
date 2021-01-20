import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/social/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:5000/api/profile/";

  getProfile(username: string): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl + username);
  }
}
