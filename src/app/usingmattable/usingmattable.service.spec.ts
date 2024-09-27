import { TestBed } from '@angular/core/testing';

import { UsingmattableService } from './usingmattable.service';

describe('UsingmattableService', () => {
  let service: UsingmattableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsingmattableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
