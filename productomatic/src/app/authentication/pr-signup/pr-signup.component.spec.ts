import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrSignupComponent } from './pr-signup.component';

describe('PrSignupComponent', () => {
  let component: PrSignupComponent;
  let fixture: ComponentFixture<PrSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
