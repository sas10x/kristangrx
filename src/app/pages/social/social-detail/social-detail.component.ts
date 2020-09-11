import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/social/activity';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { ActivityState, selectedActivity } from 'src/app/root-store/activity-store';
import { Store, select } from '@ngrx/store';
import { loadActivity } from 'src/app/root-store/activity-store/activity.actions';

@Component({
  selector: 'app-social-detail',
  templateUrl: './social-detail.component.html',
  styleUrls: ['./social-detail.component.scss']
})
export class SocialDetailComponent implements OnInit{
  inputValue: string | null = null;
  textValue: string | null = null;
  @Input() photo;
  activity$: Observable<Activity>;

  constructor(
    public dialogRef: MatDialogRef<SocialDetailComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private service: ActivitiesService,
    private store: Store<ActivityState>
    ) {

      console.log('Injected data', data)
   }

  ngOnInit() {
    console.log(this.photo);
    this.store.dispatch(
      loadActivity({id: this.data.id.toString()})
    );
    this.activity$ = this.store.pipe(select(selectedActivity));
  }

  addComment() {

  }
}
