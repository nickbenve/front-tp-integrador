import { TestBed } from '@angular/core/testing';

import { BuscarProductosService } from './buscar-productos.service';

describe('BuscarProductosService', () => {
  let service: BuscarProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
