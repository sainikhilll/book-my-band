import { TestBed } from '@angular/core/testing';

import { BandLoginService } from './band-login.service';

describe('BandLoginService', () => {
  let service: BandLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
