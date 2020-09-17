import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/social/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl: string = "http://localhost:5000/api/activities/";

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl);
  }

  getComment(activityId: string): Observable<Comment> {
    return this.http.get<Comment>(this.baseUrl + activityId);
  }

  createComment(model: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl, model);
  }
}
