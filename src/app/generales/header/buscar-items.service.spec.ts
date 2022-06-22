import { TestBed } from '@angular/core/testing';

import { BuscarItemsService } from './buscar-items.service';

describe('BuscarItemsService', () => {
  let service: BuscarItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
