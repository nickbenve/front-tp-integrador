import { TestBed } from '@angular/core/testing';

import { AgregarDescService } from './agregar-desc.service';

describe('AgregarDescService', () => {
  let service: AgregarDescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarDescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
