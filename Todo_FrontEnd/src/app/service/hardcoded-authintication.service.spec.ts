import { TestBed } from '@angular/core/testing';

import { HardcodedAuthinticationService } from './hardcoded-authintication.service';

describe('HardcodedAuthinticationService', () => {
  let service: HardcodedAuthinticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthinticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});




