import { TestBed } from '@angular/core/testing';

import { WooQryService } from './woo-qry.service';

describe('WooQryService', () => {
  let service: WooQryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WooQryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
