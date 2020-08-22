import { TestBed } from '@angular/core/testing';

import { WooCmdService } from './woo-cmd.service';

describe('WooCmdService', () => {
  let service: WooCmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WooCmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
