import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomLibComponent } from './my-custom-lib.component';

describe('MyCustomLibComponent', () => {
  let component: MyCustomLibComponent;
  let fixture: ComponentFixture<MyCustomLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCustomLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
