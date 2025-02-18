import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/social/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl: string = "http://localhost:5000/api/comments/";

  constructor(private http: HttpClient) { }

  getComments(activityId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + activityId);
  }

  getComment(activityId: string): Observable<Comment> {
    return this.http.get<Comment>(this.baseUrl + activityId);
  }

  createComment(model: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl, model);
  }
}
