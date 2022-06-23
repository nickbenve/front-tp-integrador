import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaProductosComponent } from './carga-productos.component';

describe('CargaProductosComponent', () => {
  let component: CargaProductosComponent;
  let fixture: ComponentFixture<CargaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
