import { TestBed } from '@angular/core/testing';

import { FakeStoreApiUserService } from './fake-store-api-user.service';

describe('FakeStoreApiUserService', () => {
  let service: FakeStoreApiUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeStoreApiUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
