import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { logout } from 'src/app/root-store/auth-store/auth.actions';
import { UserState } from 'src/app/root-store/auth-store/auth.reducer';
import * as fromAuthActions from '../../root-store/auth-store/auth.actions';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  constructor(private modal: NzModalRef, private userStore: Store<UserState>) {}

  destroyModal(): void {
    this.modal.destroy();
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('user');
    this.userStore.dispatch(fromAuthActions.logout());
    this.modal.destroy();
  }
}
