import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandSignupComponent } from './band-signup.component';

describe('BandSignupComponent', () => {
  let component: BandSignupComponent;
  let fixture: ComponentFixture<BandSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
