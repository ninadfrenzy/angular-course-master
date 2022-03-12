import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrProductViewComponent } from './pr-product-view.component';

describe('PrProductViewComponent', () => {
  let component: PrProductViewComponent;
  let fixture: ComponentFixture<PrProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
