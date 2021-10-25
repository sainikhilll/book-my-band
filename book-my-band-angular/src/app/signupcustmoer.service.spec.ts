import { TestBed } from '@angular/core/testing';

import { SignupcustmoerService } from './signupcustmoer.service';

describe('SignupcustmoerService', () => {
  let service: SignupcustmoerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupcustmoerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
