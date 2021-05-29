import { TestBed } from '@angular/core/testing';

import { NuevosProveedoresService } from './nuevos-proveedores.service';

describe('NuevosProveedoresService', () => {
  let service: NuevosProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevosProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
