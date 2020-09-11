import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocialDetailComponent } from '../social-detail/social-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhotoDetailComponent } from '../photo-detail/photo-detail.component';

@Component({
  selector: 'app-dialog-detail',
  template:''
})
export class DialogDetailComponent implements OnDestroy {

  currentDialog: MatDialogRef<SocialDetailComponent> = null;
  destroy = new Subject<any>();

  constructor(matDialog: MatDialog, route: ActivatedRoute, router: Router) {
    route.params.pipe(takeUntil(this.destroy))
    .subscribe(params => {
      if(this.currentDialog) {
        this.currentDialog.close();
      }

      this.currentDialog = matDialog.open(SocialDetailComponent, {
        data: { id: params.id }
      });
      this.currentDialog.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        router.navigateByUrl('/social/social');
      })
    })
   }

  ngOnDestroy() {
    this.destroy.next();
  }
}
