import { TestBed } from '@angular/core/testing';

import { BusquedaProveedoresService } from './busqueda-proveedores.service';

describe('BusquedaProveedoresService', () => {
  let service: BusquedaProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
