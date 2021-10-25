import { TestBed } from '@angular/core/testing';

import { BandsignupService } from './bandsignup.service';

describe('BandsignupService', () => {
  let service: BandsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
