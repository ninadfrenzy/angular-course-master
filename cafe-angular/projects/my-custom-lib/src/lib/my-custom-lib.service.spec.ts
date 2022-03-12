import { TestBed } from '@angular/core/testing';

import { MyCustomLibService } from './my-custom-lib.service';

describe('MyCustomLibService', () => {
  let service: MyCustomLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCustomLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
