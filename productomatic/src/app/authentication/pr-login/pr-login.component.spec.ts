import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrLoginComponent } from './pr-login.component';

describe('PrLoginComponent', () => {
  let component: PrLoginComponent;
  let fixture: ComponentFixture<PrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
