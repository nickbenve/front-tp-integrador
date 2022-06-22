import { TestBed } from '@angular/core/testing';

import { CrearItemService } from './crear-item.service';

describe('CrearItemService', () => {
  let service: CrearItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
