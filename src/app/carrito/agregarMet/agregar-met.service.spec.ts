import { TestBed } from '@angular/core/testing';

import { AgregarMetService } from './agregar-met.service';

describe('AgregarMetService', () => {
  let service: AgregarMetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarMetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
