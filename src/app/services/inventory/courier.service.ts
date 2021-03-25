import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  message: any = {};
  private messageSource = new BehaviorSubject(this.message);
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: Object) {
    this.messageSource.next(message)
  }
}
