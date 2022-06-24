import { TestBed } from '@angular/core/testing';

import { EnviarConfirService } from './enviar-confir.service';

describe('EnviarConfirService', () => {
  let service: EnviarConfirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarConfirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
