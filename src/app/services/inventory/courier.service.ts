import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  private messageSource = new BehaviorSubject('default');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}