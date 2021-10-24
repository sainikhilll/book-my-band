import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBandsComponent } from './show-bands.component';

describe('ShowBandsComponent', () => {
  let component: ShowBandsComponent;
  let fixture: ComponentFixture<ShowBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
