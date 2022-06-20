/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisibilidadHeaderService } from './visibilidadHeader.service';

describe('Service: VisibilidadHeader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisibilidadHeaderService]
    });
  });

  it('should ...', inject([VisibilidadHeaderService], (service: VisibilidadHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
