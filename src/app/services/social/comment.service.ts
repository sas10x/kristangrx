import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/social/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl: string = "http://localhost:5000/api/comments/28C540E5-0265-4D4C-6711-08D85642F3D1";

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
