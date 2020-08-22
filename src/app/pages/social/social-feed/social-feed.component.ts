import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/social/activity';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { SocialCreateComponent } from '../social-create/social-create.component';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  activities: Activity[];
  constructor(private activitiesService: ActivitiesService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.activitiesService.getActivities().subscribe(
      res => this.activities = res
    )
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
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
