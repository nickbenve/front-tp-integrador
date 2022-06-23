import { TestBed } from '@angular/core/testing';

import { TraerProveedoresService } from './traer-proveedores.service';

describe('TraerProveedoresService', () => {
  let service: TraerProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
