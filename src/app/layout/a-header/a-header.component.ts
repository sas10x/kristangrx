import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { ProfileDropdownComponent } from 'src/app/auth/profile-dropdown/profile-dropdown.component';
import { User } from 'src/app/models/auth/user';
import { selectUser, UserState } from 'src/app/root-store/auth-store/auth.reducer';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.scss']
})
export class AHeaderComponent implements OnInit {
  user$: Observable<User>;
  constructor(private router: Router, private modalService: NzModalService, private userStore: Store<UserState>) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.user$ = this.userStore.pipe(select(selectUser));
  }
  showModal2(): void {
    this.modalService.create({
      // nzTitle: 'Modal Title',
      nzClassName: 'nz-modal-kristan',
      nzContent: ProfileDropdownComponent
    });
  }

  showModal3(): void {
  }
}
