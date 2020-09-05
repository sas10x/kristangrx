import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { SocialDetailComponent } from '../social-detail/social-detail.component';

@Component({
  selector: 'app-social-modal',
  template: ''
})
export class SocialModalComponent {

  destroy = new Subject<any>();
  currentDialog = null;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    router: Router
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {

        // When router navigates on this component is takes the params and opens up the photo detail modal
        this.currentDialog = this.modalService.open(SocialDetailComponent, {centered: true});
        this.currentDialog.componentInstance.photo = params.id;

        // Go back to home page after the modal is closed
        this.currentDialog.result.then(result => {
            router.navigateByUrl('/social/social/profile');
        }, reason => {
            router.navigateByUrl('/social/social/profile');
        });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

}
