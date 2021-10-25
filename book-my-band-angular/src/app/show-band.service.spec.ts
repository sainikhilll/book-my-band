import { TestBed } from '@angular/core/testing';

import { ShowBandService } from './show-band.service';

describe('ShowBandService', () => {
  let service: ShowBandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowBandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
