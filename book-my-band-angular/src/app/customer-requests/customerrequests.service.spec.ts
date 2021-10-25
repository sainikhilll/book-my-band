import { TestBed } from '@angular/core/testing';

import { CustomerrequestsService } from './customerrequests.service';

describe('CustomerrequestsService', () => {
  let service: CustomerrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
