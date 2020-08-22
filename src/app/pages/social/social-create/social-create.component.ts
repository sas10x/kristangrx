import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ActivitiesService } from 'src/app/services/social/activities.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-social-create',
  templateUrl: './social-create.component.html',
  styleUrls: ['./social-create.component.scss']
})
export class SocialCreateComponent implements OnInit {

  validateForm!: FormGroup;

  
  constructor(private modal: NzModalRef, private activitiesService: ActivitiesService, private fb: FormBuilder) {}

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
    this.activitiesService.postActivity(form.value).subscribe(
      res => {console.log(res);this.modal.destroy();}
    )
  }
}
