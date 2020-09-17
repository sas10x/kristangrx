import { Component, OnInit, Input, Inject, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/social/activity';

import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { ActivityState, selectedActivity } from 'src/app/root-store/activity-store';
import { Store, select } from '@ngrx/store';
import { loadActivity } from 'src/app/root-store/activity-store/activity.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/social/message.service';
import { Comment } from 'src/app/models/social/comment';
import * as fromCommentActions from '../../../root-store/comment-store/comment.actions';
@Component({
  selector: 'app-social-detail',
  templateUrl: './social-detail.component.html',
  styleUrls: ['./social-detail.component.scss']
})
export class SocialDetailComponent implements OnInit{
  txtMessage: string = '';  
  uniqueID: string = new Date().getTime().toString();  
  messages = new Array<Comment>();  
  message = new Comment();  

  inputValue: string | null = null;
  textValue: string | null = null;
  comment: Comment;
  validateForm!: FormGroup;

  @Input() photo;
  activity$: Observable<Activity>;

  constructor(
    public dialogRef: MatDialogRef<SocialDetailComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private chatService: MessageService,  
    private _ngZone: NgZone,  
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ActivitiesService,
    private store: Store<ActivityState>
    ) {
      // console.log('Injected data', data)
      this.subscribeToEvents();  
   }

  ngOnInit() {
    console.log(localStorage.getItem('token'));
    this.validateForm = this.fb.group({
      body: [null, [Validators.required]]
    });
    console.log(this.photo);
    this.store.dispatch(
      loadActivity({id: this.data.id.toString()})
    );
    this.activity$ = this.store.pipe(select(selectedActivity));
  }

  addComment() {

  }
  submitForm(form): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(form.value);
    this.message = new Comment();
    this.message.activity = this.data.id.toString()
    this.message.body = form.value.body;
    this.chatService.sendMessage(this.message); 
  }

  private subscribeToEvents(): void {  
  
    this.chatService.messageReceived.subscribe((comment: Comment) => {  
      this._ngZone.run(() => { 
        fromCommentActions.addCommentSuccess({ comment });
          console.log('KRISTAN');
          // this.messages.push(message);  
      });  
    });  
  }  
}
