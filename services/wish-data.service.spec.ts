import { TestBed } from '@angular/core/testing';

import { WishDataService } from './wish-data.service';

describe('WishDataService', () => {
  let service: WishDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
