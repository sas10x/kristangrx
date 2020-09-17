import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivityState } from 'src/app/root-store/activity-store';
import { Store } from '@ngrx/store';
import { addActivity } from 'src/app/root-store/activity-store/activity.actions';

@Component({
  selector: 'app-social-create',
  templateUrl: './social-create.component.html',
  styleUrls: ['./social-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialCreateComponent implements OnInit {
  textValue: string | null = null;
  validateForm!: FormGroup;

  
  constructor(private modal: NzModalRef, private activitiesService: ActivitiesService, private fb: FormBuilder, private store: Store<ActivityState>) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  destroyModal(): void {
    
  }
  submitForm(form): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.store.dispatch(addActivity({ activity: form.value}));
    this.modal.destroy();

  }
  handleCancel(): void {
    console.log('handleCancel');
  }
}
