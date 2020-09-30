import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/social/activity';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { Store, select } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ActivityState, selectActivities } from 'src/app/root-store/activity-store';
import { SocialCreateComponent } from '../social-create/social-create.component';
import * as fromActions from'src/app/root-store/activity-store/activity.actions';
import { User } from 'src/app/models/auth/user';
import { getUser, UserState, selectUser } from 'src/app/root-store/auth-store/auth.reducer';

@Component({
  selector: 'app-social-layout',
  templateUrl: './social-layout.component.html',
  styleUrls: ['./social-layout.component.scss']
})
export class SocialLayoutComponent implements OnInit {
  user$: Observable<User>;
  isVisible = false;
  isConfirmLoading = false;
  activities$: Observable<Activity[]>;
  constructor(private activitiesService: ActivitiesService, private modalService: NzModalService, private store: Store<ActivityState>,private userStore: Store<UserState>) { }

  ngOnInit(): void {
    this.isVisible = false;
    this.store.dispatch(fromActions.loadActivities()); 
    this.loadActivities();
    this.loadUser();
  }

  loadUser() {
    this.user$ = this.userStore.pipe(select(selectUser));
  }
  loadActivities() {
    this.activities$ = this.store.pipe(select(selectActivities));
  }
  showModal1(): void {
    this.isVisible = true;
  }

  showModal2(): void {
    this.modalService.create({
      nzTitle: 'Whats happening?',
      nzContent: SocialCreateComponent
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
    console.log('handleOk');
  }

  handleCancel(): void {
    this.isVisible = false;
    console.log('handleCancel');
  }

}
