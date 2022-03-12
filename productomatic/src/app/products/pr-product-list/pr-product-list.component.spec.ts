import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrProductListComponent } from './pr-product-list.component';

describe('PrProductListComponent', () => {
  let component: PrProductListComponent;
  let fixture: ComponentFixture<PrProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
