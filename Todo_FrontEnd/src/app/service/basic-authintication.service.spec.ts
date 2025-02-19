import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationService } from './basic-authintication.service';

describe('BasicAuthinticationService', () => {
  let service: BasicAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
